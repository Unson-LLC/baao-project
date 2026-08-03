import assert from 'node:assert/strict';
import test from 'node:test';

import { validateRows } from './validate-baao-pilot-ledger.mjs';

const requiredHeaders = [
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

function completedCase(overrides = {}) {
  return {
    transaction_id: 'SIM-001',
    archetype: 'direct_member',
    lead_origin: 'member_direct',
    transaction_type: 'case',
    offer_variant: 'case_standard_160k',
    offer_date: '2026-07-17',
    decision_date: '2026-07-18',
    decision_status: 'completed',
    rejection_reason: '',
    labor_cost_rate_yen_per_hour: '12000',
    offer_hours: '0.5',
    offer_direct_cost_yen: '6000',
    scoping_fee_yen: '23000',
    scoping_paid_date: '2026-07-18',
    scoping_hours: '1',
    scoping_direct_cost_yen: '12000',
    prepayment_yen: '160000',
    prepayment_date: '2026-07-18',
    delivery_start_date: '2026-07-19',
    recognized_revenue_yen: '160000',
    author_fee_yen: '60000',
    royalty_yen: '0',
    external_cost_yen: '0',
    delivery_hours: '3',
    delivery_direct_cost_yen: '36000',
    total_direct_cost_yen: '114000',
    realized_gross_profit_yen: '46000',
    gross_margin_rate: '0.2875',
    customer_permission_status: 'approved',
    customer_permission_date: '2026-07-18',
    distribution_due_date: '2026-08-03',
    distribution_completed_date: '2026-07-30',
    fairness_score_1_7: '6',
    opt_in_confirmed: 'yes',
    membership_no_disadvantage_confirmed: 'yes',
    coi_status: 'clear',
    complaint_status: 'none',
    owner: 'pilot_owner',
    notes: 'fictional test row',
    ...overrides,
  };
}

test('valid completed transaction passes', () => {
  const result = validateRows([completedCase()], requiredHeaders);
  assert.deepEqual(result.errors, []);
});

test('completed transaction below 20 percent gross margin fails', () => {
  const row = completedCase({
    author_fee_yen: '81000',
    total_direct_cost_yen: '135000',
    realized_gross_profit_yen: '25000',
    gross_margin_rate: '0.15625',
  });
  const result = validateRows([row], requiredHeaders);
  assert.match(result.errors.join('\n'), /gross margin must be at least 0\.20/);
});

test('a single declined offer retains its real offer cost without stopping the pilot', () => {
  const row = completedCase({
    transaction_id: 'SIM-002',
    decision_status: 'declined',
    rejection_reason: 'price',
    scoping_fee_yen: '0',
    scoping_paid_date: '',
    scoping_hours: '0',
    scoping_direct_cost_yen: '0',
    prepayment_yen: '0',
    prepayment_date: '',
    delivery_start_date: '',
    recognized_revenue_yen: '0',
    author_fee_yen: '0',
    delivery_hours: '0',
    delivery_direct_cost_yen: '0',
    total_direct_cost_yen: '6000',
    realized_gross_profit_yen: '-6000',
    gross_margin_rate: '0',
    customer_permission_status: 'not_requested',
    customer_permission_date: '',
    distribution_due_date: '',
    distribution_completed_date: '',
  });
  const result = validateRows([row], requiredHeaders);
  assert.deepEqual(result.errors, []);
  assert.match(result.warnings.join('\n'), /needs at least 3 terminal offers/);
});

test('three terminal offers with negative aggregate economics fail the offer route', () => {
  const rows = ['SIM-D01', 'SIM-D02', 'SIM-D03'].map((transactionId) =>
    completedCase({
      transaction_id: transactionId,
      decision_status: 'declined',
      rejection_reason: 'price',
      scoping_fee_yen: '0',
      scoping_paid_date: '',
      scoping_hours: '0',
      scoping_direct_cost_yen: '0',
      prepayment_yen: '0',
      prepayment_date: '',
      delivery_start_date: '',
      recognized_revenue_yen: '0',
      author_fee_yen: '0',
      delivery_hours: '0',
      delivery_direct_cost_yen: '0',
      total_direct_cost_yen: '6000',
      realized_gross_profit_yen: '-6000',
      gross_margin_rate: '0',
      customer_permission_status: 'not_requested',
      customer_permission_date: '',
      distribution_due_date: '',
      distribution_completed_date: '',
    }),
  );
  const result = validateRows(rows, requiredHeaders);
  assert.match(result.errors.join('\n'), /offer route case_standard_160k has negative aggregate gross profit/);
});

test('failed paid scoping cannot have negative gross profit', () => {
  const row = completedCase({
    transaction_id: 'SIM-003',
    decision_status: 'scoping_rejected',
    rejection_reason: 'rights_not_cleared',
    scoping_fee_yen: '23000',
    scoping_paid_date: '2026-07-18',
    scoping_hours: '2',
    scoping_direct_cost_yen: '24000',
    prepayment_yen: '0',
    prepayment_date: '',
    delivery_start_date: '',
    recognized_revenue_yen: '23000',
    author_fee_yen: '0',
    delivery_hours: '0',
    delivery_direct_cost_yen: '0',
    total_direct_cost_yen: '30000',
    realized_gross_profit_yen: '-7000',
    gross_margin_rate: '-0.3043478261',
    customer_permission_status: 'not_approved',
    customer_permission_date: '',
    distribution_due_date: '',
    distribution_completed_date: '',
  });
  const result = validateRows([row], requiredHeaders);
  assert.match(result.errors.join('\n'), /offered flow gross profit cannot be negative/);
});

test('terminal paid scoping must preserve at least 20 percent gross margin', () => {
  const row = completedCase({
    transaction_id: 'SIM-004',
    decision_status: 'scoping_rejected',
    rejection_reason: 'rights_not_cleared',
    scoping_fee_yen: '21000',
    scoping_paid_date: '2026-07-18',
    scoping_hours: '1',
    scoping_direct_cost_yen: '12000',
    prepayment_yen: '0',
    prepayment_date: '',
    delivery_start_date: '',
    recognized_revenue_yen: '21000',
    author_fee_yen: '0',
    delivery_hours: '0',
    delivery_direct_cost_yen: '0',
    total_direct_cost_yen: '18000',
    realized_gross_profit_yen: '3000',
    gross_margin_rate: '0.1428571429',
    customer_permission_status: 'not_approved',
    customer_permission_date: '',
    distribution_due_date: '',
    distribution_completed_date: '',
  });
  const result = validateRows([row], requiredHeaders);
  assert.match(result.errors.join('\n'), /terminal paid scoping gross margin must be at least 0\.20/);
});

test('declared labor cost must match hours times the row labor rate', () => {
  const row = completedCase({ offer_direct_cost_yen: '1' });
  const result = validateRows([row], requiredHeaders);
  assert.match(
    result.errors.join('\n'),
    /offer_direct_cost_yen must equal offer_hours times labor_cost_rate_yen_per_hour/,
  );
});

test('explicit opt in and no-membership-disadvantage confirmation are mandatory', () => {
  const row = completedCase({
    opt_in_confirmed: 'no',
    membership_no_disadvantage_confirmed: '',
  });
  const result = validateRows([row], requiredHeaders);
  assert.match(result.errors.join('\n'), /opt_in_confirmed must be yes/);
  assert.match(result.errors.join('\n'), /membership_no_disadvantage_confirmed must be yes/);
});

test('delivery cannot start before required prepayment', () => {
  const row = completedCase({
    prepayment_yen: '100000',
    prepayment_date: '2026-07-20',
    delivery_start_date: '2026-07-19',
  });
  const result = validateRows([row], requiredHeaders);
  assert.match(result.errors.join('\n'), /prepayment must cover recognized revenue/);
  assert.match(result.errors.join('\n'), /prepayment_date must be on or before delivery_start_date/);
});
