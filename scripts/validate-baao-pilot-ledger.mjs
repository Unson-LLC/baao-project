#!/usr/bin/env node

import fs from 'node:fs';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

export const REQUIRED_HEADERS = [
  'transaction_id',
  'archetype',
  'lead_origin',
  'transaction_type',
  'offer_variant',
  'offer_date',
  'decision_date',
  'decision_status',
  'rejection_reason',
  'labor_cost_rate_yen_per_hour',
  'offer_hours',
  'offer_direct_cost_yen',
  'scoping_fee_yen',
  'scoping_paid_date',
  'scoping_hours',
  'scoping_direct_cost_yen',
  'prepayment_yen',
  'prepayment_date',
  'delivery_start_date',
  'recognized_revenue_yen',
  'author_fee_yen',
  'royalty_yen',
  'external_cost_yen',
  'delivery_hours',
  'delivery_direct_cost_yen',
  'total_direct_cost_yen',
  'realized_gross_profit_yen',
  'gross_margin_rate',
  'customer_permission_status',
  'customer_permission_date',
  'distribution_due_date',
  'distribution_completed_date',
  'fairness_score_1_7',
  'opt_in_confirmed',
  'membership_no_disadvantage_confirmed',
  'coi_status',
  'complaint_status',
  'owner',
  'notes',
];

const ALLOWED = {
  archetype: new Set(['direct_member', 'enterprise_member', 'external_partner', 'other']),
  lead_origin: new Set(['member_direct', 'baao_new_lead', 'joint', 'other']),
  transaction_type: new Set(['referral', 'co_delivery', 'case', 'knowledge']),
  decision_status: new Set([
    'offered',
    'declined',
    'scoping_paid',
    'scoping_rejected',
    'accepted',
    'in_delivery',
    'completed',
    'cancelled',
  ]),
  customer_permission_status: new Set([
    'not_requested',
    'pending',
    'approved',
    'not_approved',
    'not_required',
  ]),
  coi_status: new Set(['unchecked', 'clear', 'mitigated', 'blocked']),
  complaint_status: new Set(['none', 'open', 'resolved']),
};

const NUMERIC_FIELDS = [
  'labor_cost_rate_yen_per_hour',
  'offer_hours',
  'offer_direct_cost_yen',
  'scoping_fee_yen',
  'scoping_hours',
  'scoping_direct_cost_yen',
  'prepayment_yen',
  'recognized_revenue_yen',
  'author_fee_yen',
  'royalty_yen',
  'external_cost_yen',
  'delivery_hours',
  'delivery_direct_cost_yen',
  'total_direct_cost_yen',
  'realized_gross_profit_yen',
  'gross_margin_rate',
];

const NON_NEGATIVE_FIELDS = NUMERIC_FIELDS.filter(
  (field) => !['realized_gross_profit_yen', 'gross_margin_rate'].includes(field),
);

const DATE_FIELDS = [
  'offer_date',
  'decision_date',
  'scoping_paid_date',
  'prepayment_date',
  'delivery_start_date',
  'customer_permission_date',
  'distribution_due_date',
  'distribution_completed_date',
];

const TERMINAL_STATUSES = new Set(['declined', 'scoping_rejected', 'completed', 'cancelled']);
const NON_DECLINE_TERMINAL_STATUSES = new Set(['scoping_rejected', 'completed', 'cancelled']);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  const source = text.replace(/^\uFEFF/, '');
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];

    if (quoted) {
      if (char === '"' && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field.replace(/\r$/, ''));
      if (row.some((value) => value !== '')) rows.push(row);
      row = [];
      field = '';
    } else {
      field += char;
    }
  }

  if (quoted) throw new Error('CSV has an unclosed quoted field');
  row.push(field.replace(/\r$/, ''));
  if (row.some((value) => value !== '')) rows.push(row);
  return rows;
}

export function parseLedgerCsv(text) {
  const records = parseCsv(text);
  if (records.length === 0) return { headers: [], rows: [] };

  const [headers, ...dataRows] = records;
  const rows = dataRows.map((values) =>
    Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ''])),
  );
  return { headers, rows };
}

function isIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return Number.isFinite(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
}

function numberValue(row, field) {
  return Number(row[field]);
}

function addError(errors, rowNumber, transactionId, message) {
  errors.push(`row ${rowNumber} (${transactionId || 'missing transaction_id'}): ${message}`);
}

function validateEnum(row, field, errors, rowNumber, transactionId) {
  if (!ALLOWED[field].has(row[field])) {
    addError(errors, rowNumber, transactionId, `${field} has unsupported value "${row[field]}"`);
  }
}

function requiredPrepaymentRatio(transactionType) {
  if (transactionType === 'co_delivery') return 0.7;
  if (transactionType === 'case' || transactionType === 'knowledge') return 1;
  return 0;
}

export function validateRows(rows, headers) {
  const errors = [];
  const warnings = [];
  const missingHeaders = REQUIRED_HEADERS.filter((header) => !headers.includes(header));
  if (missingHeaders.length > 0) {
    errors.push(`missing required headers: ${missingHeaders.join(', ')}`);
    return { errors, warnings };
  }

  const transactionIds = new Set();
  const terminalOfferRoutes = new Map();

  rows.forEach((row, index) => {
    const rowNumber = index + 2;
    const transactionId = row.transaction_id;

    if (!transactionId) {
      addError(errors, rowNumber, transactionId, 'transaction_id is required');
    } else if (transactionIds.has(transactionId)) {
      addError(errors, rowNumber, transactionId, 'transaction_id must be unique');
    } else {
      transactionIds.add(transactionId);
    }

    for (const field of Object.keys(ALLOWED)) {
      validateEnum(row, field, errors, rowNumber, transactionId);
    }

    if (!row.offer_variant) addError(errors, rowNumber, transactionId, 'offer_variant is required');
    if (!row.owner) addError(errors, rowNumber, transactionId, 'owner is required');

    for (const field of NUMERIC_FIELDS) {
      if (row[field] === '' || !Number.isFinite(Number(row[field]))) {
        addError(errors, rowNumber, transactionId, `${field} must be numeric`);
      }
    }

    for (const field of NON_NEGATIVE_FIELDS) {
      if (Number.isFinite(Number(row[field])) && Number(row[field]) < 0) {
        addError(errors, rowNumber, transactionId, `${field} cannot be negative`);
      }
    }

    for (const field of DATE_FIELDS) {
      if (row[field] && !isIsoDate(row[field])) {
        addError(errors, rowNumber, transactionId, `${field} must use YYYY-MM-DD`);
      }
    }

    if (!row.offer_date) addError(errors, rowNumber, transactionId, 'offer_date is required');
    if (!row.decision_date) addError(errors, rowNumber, transactionId, 'decision_date is required');

    const fairness = Number(row.fairness_score_1_7);
    if (!Number.isFinite(fairness) || fairness < 1 || fairness > 7) {
      addError(errors, rowNumber, transactionId, 'fairness_score_1_7 must be between 1 and 7');
    }

    if (row.opt_in_confirmed !== 'yes') {
      addError(errors, rowNumber, transactionId, 'opt_in_confirmed must be yes');
    }
    if (row.membership_no_disadvantage_confirmed !== 'yes') {
      addError(
        errors,
        rowNumber,
        transactionId,
        'membership_no_disadvantage_confirmed must be yes',
      );
    }

    const revenue = numberValue(row, 'recognized_revenue_yen');
    const laborCostRate = numberValue(row, 'labor_cost_rate_yen_per_hour');
    const laborCostPairs = [
      ['offer_hours', 'offer_direct_cost_yen'],
      ['scoping_hours', 'scoping_direct_cost_yen'],
      ['delivery_hours', 'delivery_direct_cost_yen'],
    ];
    for (const [hoursField, costField] of laborCostPairs) {
      const expectedLaborCost = numberValue(row, hoursField) * laborCostRate;
      const declaredLaborCost = numberValue(row, costField);
      if (
        Number.isFinite(expectedLaborCost) &&
        Number.isFinite(declaredLaborCost) &&
        Math.abs(expectedLaborCost - declaredLaborCost) > 1
      ) {
        addError(
          errors,
          rowNumber,
          transactionId,
          `${costField} must equal ${hoursField} times labor_cost_rate_yen_per_hour (${expectedLaborCost})`,
        );
      }
    }
    const expectedCost =
      numberValue(row, 'offer_direct_cost_yen') +
      numberValue(row, 'scoping_direct_cost_yen') +
      numberValue(row, 'author_fee_yen') +
      numberValue(row, 'royalty_yen') +
      numberValue(row, 'external_cost_yen') +
      numberValue(row, 'delivery_direct_cost_yen');
    const declaredCost = numberValue(row, 'total_direct_cost_yen');
    const expectedGrossProfit = revenue - expectedCost;
    const declaredGrossProfit = numberValue(row, 'realized_gross_profit_yen');
    const expectedMargin = revenue > 0 ? expectedGrossProfit / revenue : 0;
    const declaredMargin = numberValue(row, 'gross_margin_rate');

    if (Number.isFinite(expectedCost) && Number.isFinite(declaredCost) && Math.abs(expectedCost - declaredCost) > 1) {
      addError(
        errors,
        rowNumber,
        transactionId,
        `total_direct_cost_yen must equal component costs (${expectedCost})`,
      );
    }
    if (
      Number.isFinite(expectedGrossProfit) &&
      Number.isFinite(declaredGrossProfit) &&
      Math.abs(expectedGrossProfit - declaredGrossProfit) > 1
    ) {
      addError(
        errors,
        rowNumber,
        transactionId,
        `realized_gross_profit_yen must equal revenue minus direct cost (${expectedGrossProfit})`,
      );
    }
    if (
      Number.isFinite(expectedMargin) &&
      Number.isFinite(declaredMargin) &&
      Math.abs(expectedMargin - declaredMargin) > 0.00001
    ) {
      addError(
        errors,
        rowNumber,
        transactionId,
        `gross_margin_rate must equal gross profit divided by revenue (${expectedMargin.toFixed(6)})`,
      );
    }

    if (row.decision_status === 'completed' && expectedMargin < 0.2 - 0.00001) {
      addError(errors, rowNumber, transactionId, 'completed transaction gross margin must be at least 0.20');
    }
    if (NON_DECLINE_TERMINAL_STATUSES.has(row.decision_status) && expectedGrossProfit < 0) {
      addError(errors, rowNumber, transactionId, 'offered flow gross profit cannot be negative');
    }
    if (row.decision_status === 'scoping_rejected' && expectedMargin < 0.2 - 0.00001) {
      addError(
        errors,
        rowNumber,
        transactionId,
        'terminal paid scoping gross margin must be at least 0.20',
      );
    }

    const declinedNonOfferCost =
      numberValue(row, 'scoping_direct_cost_yen') +
      numberValue(row, 'author_fee_yen') +
      numberValue(row, 'royalty_yen') +
      numberValue(row, 'external_cost_yen') +
      numberValue(row, 'delivery_direct_cost_yen');
    if (row.decision_status === 'declined' && (declinedNonOfferCost !== 0 || revenue !== 0)) {
      addError(
        errors,
        rowNumber,
        transactionId,
        'declined offer must have zero revenue and no scoping or delivery cost',
      );
    }
    if (row.decision_status === 'declined' && !row.rejection_reason) {
      addError(errors, rowNumber, transactionId, 'declined offer requires rejection_reason');
    }
    if (row.decision_status === 'scoping_rejected' && !row.rejection_reason) {
      addError(errors, rowNumber, transactionId, 'scoping_rejected requires rejection_reason');
    }

    if (Number(row.scoping_fee_yen) > 0 && !row.scoping_paid_date) {
      addError(errors, rowNumber, transactionId, 'paid scoping requires scoping_paid_date');
    }

    if (['accepted', 'in_delivery', 'completed'].includes(row.decision_status)) {
      const ratio = requiredPrepaymentRatio(row.transaction_type);
      const minimumPrepayment = revenue * ratio;
      if (numberValue(row, 'prepayment_yen') < minimumPrepayment - 1) {
        addError(
          errors,
          rowNumber,
          transactionId,
          `prepayment must cover recognized revenue at required ratio ${ratio}`,
        );
      }
      if (!row.prepayment_date && ratio > 0) {
        addError(errors, rowNumber, transactionId, 'required prepayment needs prepayment_date');
      }
    }

    if (
      row.delivery_start_date &&
      row.prepayment_date &&
      row.prepayment_date > row.delivery_start_date
    ) {
      addError(errors, rowNumber, transactionId, 'prepayment_date must be on or before delivery_start_date');
    }

    if (
      ['case', 'knowledge'].includes(row.transaction_type) &&
      row.decision_status === 'completed' &&
      row.customer_permission_status !== 'approved'
    ) {
      addError(errors, rowNumber, transactionId, 'completed case or knowledge requires customer permission');
    }

    if (row.coi_status === 'blocked' && !['declined', 'scoping_rejected', 'cancelled'].includes(row.decision_status)) {
      addError(errors, rowNumber, transactionId, 'blocked conflict of interest cannot proceed');
    }
    if (row.complaint_status === 'open') {
      warnings.push(`row ${rowNumber} (${transactionId}): complaint is open`);
    }

    if (
      TERMINAL_STATUSES.has(row.decision_status) &&
      row.offer_variant &&
      Number.isFinite(expectedGrossProfit)
    ) {
      const route = terminalOfferRoutes.get(row.offer_variant) ?? { count: 0, grossProfit: 0 };
      route.count += 1;
      route.grossProfit += expectedGrossProfit;
      terminalOfferRoutes.set(row.offer_variant, route);
    }
  });

  for (const [offerVariant, route] of terminalOfferRoutes) {
    if (route.count < 3) {
      warnings.push(
        `offer route ${offerVariant} needs at least 3 terminal offers before aggregate economics gate (${route.count}/3)`,
      );
    } else if (route.grossProfit < 0) {
      errors.push(
        `offer route ${offerVariant} has negative aggregate gross profit (${route.grossProfit}) across ${route.count} terminal offers`,
      );
    }
  }

  return { errors, warnings };
}

export function validateLedgerCsv(text) {
  const { headers, rows } = parseLedgerCsv(text);
  return { ...validateRows(rows, headers), rowCount: rows.length };
}

function runCli() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Usage: node scripts/validate-baao-pilot-ledger.mjs <ledger.csv>');
    process.exitCode = 2;
    return;
  }

  let result;
  try {
    result = validateLedgerCsv(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    console.error(`Ledger validation failed: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  for (const warning of result.warnings) console.warn(`WARN: ${warning}`);
  if (result.errors.length > 0) {
    for (const error of result.errors) console.error(`ERROR: ${error}`);
    console.error(`FAIL: ${result.errors.length} error(s) across ${result.rowCount} row(s)`);
    process.exitCode = 1;
    return;
  }

  console.log(`PASS: ${result.rowCount} ledger row(s) validated`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) runCli();
