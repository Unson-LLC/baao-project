#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ITERATIONS = 10_000;
const SEED = 20260716;
const BAAO_HOURLY_COST = 12_000;

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, '..');
const defaultOutput = path.join(
  repoRoot,
  'docs/internal/simulations/BAAO_INCENTIVE_PILOT_SIMULATION_2026-07.json',
);
const outputPath = process.argv[2]
  ? path.resolve(process.cwd(), process.argv[2])
  : defaultOutput;

const profiles = [
  {
    id: 'murakami_unson_direct',
    label: '村上案件型（雲孫が直接獲得・提供）',
    facts: {
      source: '雲孫側の直接接点',
      delivery: '雲孫',
      baaoLead: false,
      baaoDelivery: false,
    },
    gcv: 3_000_000,
    nsr: 1_500_000,
    providerHourlyCost: [20_000, 30_000],
    providerCaseHours: [5, 9],
    providerRecipeHours: [18, 30],
    baaoCaseHours: [8, 14],
    baaoCaseLiteHours: [2, 4],
    baaoKnowledgeHours: [5, 9],
    distributionValue: [80_000, 300_000],
    brandValue: [30_000, 150_000],
    supervisionValue: [0, 0],
    deliveryCost: [0, 0],
    caseAssetValue: [200_000, 500_000],
    knowledgeGrossValue: [250_000, 700_000],
    ipRisk: [150_000, 500_000],
    permission: {
      bundledCase: 0.35,
      granularCase: 0.65,
      granularKnowledge: 0.20,
    },
  },
  {
    id: 'enterprise_co_delivery',
    label: 'BAAO関与エンタープライズ型（会員主契約＋監修）',
    facts: {
      source: '会員側の既存接点',
      delivery: '会員法人＋BAAO監修',
      baaoLead: false,
      baaoDelivery: true,
    },
    gcv: 8_000_000,
    nsr: 3_600_000,
    providerHourlyCost: [25_000, 35_000],
    providerCaseHours: [6, 12],
    providerRecipeHours: [24, 40],
    baaoCaseHours: [9, 16],
    baaoCaseLiteHours: [3, 5],
    baaoKnowledgeHours: [6, 10],
    distributionValue: [180_000, 500_000],
    brandValue: [100_000, 350_000],
    supervisionValue: [650_000, 1_200_000],
    deliveryCost: [280_000, 420_000],
    caseAssetValue: [300_000, 800_000],
    knowledgeGrossValue: [500_000, 1_200_000],
    ipRisk: [350_000, 1_000_000],
    permission: {
      bundledCase: 0.25,
      granularCase: 0.55,
      granularKnowledge: 0.30,
    },
  },
  {
    id: 'external_partner_referral',
    label: '外部パートナー型（BAAO紹介＋パートナー提供）',
    facts: {
      source: 'BAAOが新規接点を紹介',
      delivery: '外部パートナー',
      baaoLead: true,
      baaoDelivery: false,
    },
    gcv: 5_000_000,
    nsr: 2_000_000,
    providerHourlyCost: [18_000, 28_000],
    providerCaseHours: [5, 10],
    providerRecipeHours: [16, 30],
    baaoCaseHours: [8, 14],
    baaoCaseLiteHours: [2, 4],
    baaoKnowledgeHours: [5, 9],
    distributionValue: [180_000, 550_000],
    brandValue: [80_000, 250_000],
    supervisionValue: [0, 0],
    deliveryCost: [0, 0],
    leadOpsHours: [3, 6],
    caseAssetValue: [180_000, 500_000],
    knowledgeGrossValue: [300_000, 900_000],
    ipRisk: [200_000, 600_000],
    permission: {
      bundledCase: 0.45,
      granularCase: 0.72,
      granularKnowledge: 0.50,
    },
  },
];

const regimes = [
  'current_handbook',
  'v1_2',
  'proposed_v2_initial',
  'proposed_v2_revised',
];

function mulberry32(seed) {
  return function random() {
    let value = (seed += 0x6d2b79f5);
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4_294_967_296;
  };
}

function uniform(random, [min, max]) {
  return min + (max - min) * random();
}

function chance(random, probability) {
  return random() < probability;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function emptyFlow(reason) {
  return {
    offered: false,
    reason,
    option: 'none',
    providerAccepted: false,
    baaoAccepted: false,
    customerPermitted: false,
    completed: false,
    providerUtility: 0,
    baaoImmediateCash: 0,
    baaoTotalValue: 0,
    opsHours: 0,
    caseOpsHours: 0,
    caseSlaApplies: false,
  };
}

function offeredFlow({
  option,
  providerUtility,
  baaoImmediateCash,
  baaoTotalValue,
  opsHours,
  caseOpsHours = 0,
  caseSlaApplies = caseOpsHours > 0,
  customerPermitted = true,
}) {
  const providerAccepted = providerUtility >= 0;
  const baaoAccepted = baaoTotalValue >= 0;
  return {
    offered: true,
    reason: null,
    option,
    providerAccepted,
    baaoAccepted,
    customerPermitted,
    completed: providerAccepted && baaoAccepted && customerPermitted,
    providerUtility,
    baaoImmediateCash,
    baaoTotalValue,
    opsHours,
    caseOpsHours,
    caseSlaApplies,
  };
}

function aliasFlow(source, option) {
  return {
    offered: true,
    reason: 'Economics are counted in the linked bundled flow.',
    option,
    providerAccepted: source.providerAccepted,
    baaoAccepted: source.baaoAccepted,
    customerPermitted: source.customerPermitted,
    completed: source.completed,
    providerUtility: 0,
    baaoImmediateCash: 0,
    baaoTotalValue: 0,
    opsHours: 0,
    caseOpsHours: 0,
    caseSlaApplies: false,
  };
}

function sampleProfile(random, profile) {
  const providerHourlyCost = uniform(random, profile.providerHourlyCost);
  return {
    providerHourlyCost,
    providerCaseHours: uniform(random, profile.providerCaseHours),
    providerRecipeHours: uniform(random, profile.providerRecipeHours),
    baaoCaseHours: uniform(random, profile.baaoCaseHours),
    baaoCaseLiteHours: uniform(random, profile.baaoCaseLiteHours),
    baaoKnowledgeHours: uniform(random, profile.baaoKnowledgeHours),
    distributionValue: uniform(random, profile.distributionValue),
    brandValue: uniform(random, profile.brandValue),
    supervisionValue: uniform(random, profile.supervisionValue),
    deliveryCost: uniform(random, profile.deliveryCost),
    leadOpsHours: profile.leadOpsHours
      ? uniform(random, profile.leadOpsHours)
      : 0,
    caseAssetValue: uniform(random, profile.caseAssetValue),
    knowledgeGrossValue: uniform(random, profile.knowledgeGrossValue),
    ipRisk: uniform(random, profile.ipRisk),
  };
}

function referralFlow(profile, sample) {
  if (!profile.facts.baaoLead) {
    return emptyFlow('BAAO did not originate the lead.');
  }
  const fee = profile.gcv * 0.10;
  const opsCost = sample.leadOpsHours * BAAO_HOURLY_COST;
  return offeredFlow({
    option: 'referral_10pct_gcv_12m',
    providerUtility: profile.nsr - fee,
    baaoImmediateCash: fee - opsCost,
    baaoTotalValue: fee - opsCost,
    opsHours: sample.leadOpsHours,
  });
}

function coDeliveryFlow(profile, sample) {
  if (!profile.facts.baaoDelivery) {
    return emptyFlow('BAAO has no pre-agreed delivery role.');
  }
  const price = 500_000;
  return offeredFlow({
    option: 'co_delivery_standard_500k',
    providerUtility: sample.supervisionValue - price,
    baaoImmediateCash: price - sample.deliveryCost,
    baaoTotalValue: price - sample.deliveryCost,
    opsHours: sample.deliveryCost / BAAO_HOURLY_COST,
  });
}

function currentCBundle(random, profile, sample) {
  const caseLabor = sample.providerCaseHours * sample.providerHourlyCost;
  const recipeLabor = sample.providerRecipeHours * sample.providerHourlyCost;
  const caseOpsCost = sample.baaoCaseHours * BAAO_HOURLY_COST;
  const knowledgeOpsCost = sample.baaoKnowledgeHours * BAAO_HOURLY_COST;
  const deliveryBenefit = profile.facts.baaoDelivery ? sample.supervisionValue : 0;
  const deliveryCost = profile.facts.baaoDelivery ? sample.deliveryCost : 0;
  const commonBenefit = sample.distributionValue + sample.brandValue + deliveryBenefit;

  const option12 = {
    option: 'cbaa_12pct_nsr',
    providerUtility: commonBenefit - profile.nsr * 0.12 - caseLabor,
    baaoImmediateCash: profile.nsr * 0.12 - caseOpsCost - deliveryCost,
    baaoTotalValue:
      profile.nsr * 0.12 - caseOpsCost - deliveryCost + sample.caseAssetValue,
    opsHours: sample.baaoCaseHours + deliveryCost / BAAO_HOURLY_COST,
    caseOpsHours: sample.baaoCaseHours,
    customerPermitted: chance(random, profile.permission.bundledCase),
  };

  const option5 = {
    option: 'cbaa_5pct_plus_case_recipe',
    providerUtility:
      commonBenefit -
      profile.nsr * 0.05 -
      caseLabor -
      recipeLabor -
      sample.ipRisk,
    baaoImmediateCash:
      profile.nsr * 0.05 - caseOpsCost - knowledgeOpsCost - deliveryCost,
    baaoTotalValue:
      profile.nsr * 0.05 -
      caseOpsCost -
      knowledgeOpsCost -
      deliveryCost +
      sample.caseAssetValue +
      sample.knowledgeGrossValue,
    opsHours:
      sample.baaoCaseHours +
      sample.baaoKnowledgeHours +
      deliveryCost / BAAO_HOURLY_COST,
    caseOpsHours: sample.baaoCaseHours,
    customerPermitted:
      chance(random, profile.permission.bundledCase) &&
      chance(random, profile.permission.granularKnowledge),
  };

  const choice = option12.providerUtility >= option5.providerUtility ? option12 : option5;
  return offeredFlow(choice);
}

function v12ListingFlow(random, profile, sample) {
  const caseLabor = sample.providerCaseHours * sample.providerHourlyCost;
  const recipeLabor = sample.providerRecipeHours * sample.providerHourlyCost;
  const caseOpsCost = sample.baaoCaseHours * BAAO_HOURLY_COST;
  const knowledgeOpsCost = sample.baaoKnowledgeHours * BAAO_HOURLY_COST;
  const commonBenefit = sample.distributionValue + sample.brandValue;

  const caseOnly = {
    option: 'listing_case_only_50k',
    providerUtility: commonBenefit - 50_000 - caseLabor,
    baaoImmediateCash: 50_000 - caseOpsCost,
    baaoTotalValue: 50_000 - caseOpsCost + sample.caseAssetValue,
    opsHours: sample.baaoCaseHours,
    caseOpsHours: sample.baaoCaseHours,
    customerPermitted: chance(random, profile.permission.granularCase),
  };

  const freeWithRecipe = {
    option: 'listing_free_with_case_recipe',
    providerUtility:
      commonBenefit - caseLabor - recipeLabor - sample.ipRisk,
    baaoImmediateCash: -caseOpsCost - knowledgeOpsCost,
    baaoTotalValue:
      -caseOpsCost -
      knowledgeOpsCost +
      sample.caseAssetValue +
      sample.knowledgeGrossValue,
    opsHours: sample.baaoCaseHours + sample.baaoKnowledgeHours,
    caseOpsHours: sample.baaoCaseHours,
    customerPermitted:
      chance(random, profile.permission.granularCase) &&
      chance(random, profile.permission.granularKnowledge),
  };

  const choice =
    caseOnly.providerUtility >= freeWithRecipe.providerUtility
      ? caseOnly
      : freeWithRecipe;
  return offeredFlow(choice);
}

function proposedCaseFlow(random, profile, sample, revised) {
  const commonBenefit = sample.distributionValue + sample.brandValue;

  if (profile.id === 'murakami_unson_direct') {
    const honorarium = 150_000;
    const labor = sample.providerCaseHours * sample.providerHourlyCost;
    const opsCost = sample.baaoCaseHours * BAAO_HOURLY_COST;
    return offeredFlow({
      option: 'commissioned_case_author_fee_150k',
      providerUtility: commonBenefit + honorarium - labor,
      baaoImmediateCash: -honorarium - opsCost,
      baaoTotalValue: -honorarium - opsCost + sample.caseAssetValue,
      opsHours: sample.baaoCaseHours,
      caseOpsHours: sample.baaoCaseHours,
      caseSlaApplies: false,
      customerPermitted: chance(random, profile.permission.granularCase),
    });
  }

  if (profile.id === 'enterprise_co_delivery') {
    const price = 60_000;
    const liteProviderHours = sample.providerCaseHours * 0.55;
    const labor = liteProviderHours * sample.providerHourlyCost;
    const caseOpsHours = revised
      ? Math.min(sample.baaoCaseLiteHours, 3)
      : sample.baaoCaseLiteHours;
    const opsCost = caseOpsHours * BAAO_HOURLY_COST;
    return offeredFlow({
      option: 'verified_case_lite_60k',
      providerUtility: commonBenefit - price - labor,
      baaoImmediateCash: price - opsCost,
      baaoTotalValue: price - opsCost + sample.caseAssetValue,
      opsHours: caseOpsHours,
      caseOpsHours,
      customerPermitted: chance(random, profile.permission.granularCase),
    });
  }

  const price = 150_000;
  const labor = sample.providerCaseHours * sample.providerHourlyCost;
  const caseOpsHours = revised
    ? Math.min(sample.baaoCaseHours, 8)
    : sample.baaoCaseHours;
  const opsCost = caseOpsHours * BAAO_HOURLY_COST;
  return offeredFlow({
    option: 'verified_case_standard_150k',
    providerUtility: commonBenefit - price - labor,
    baaoImmediateCash: price - opsCost,
    baaoTotalValue: price - opsCost + sample.caseAssetValue,
    opsHours: caseOpsHours,
    caseOpsHours,
    customerPermitted: chance(random, profile.permission.granularCase),
  });
}

function proposedKnowledgeFlow(random, profile, sample, revised) {
  if (profile.id === 'murakami_unson_direct') {
    return emptyFlow('Knowledge licensing is intentionally not requested at project start.');
  }

  const moduleScopeFactor = revised ? 0.40 : 1;
  const labor =
    sample.providerRecipeHours * moduleScopeFactor * sample.providerHourlyCost;
  const opsCost = sample.baaoKnowledgeHours * BAAO_HOURLY_COST;
  const controlledIpRisk = sample.ipRisk * (revised ? 0.10 : 0.25);
  const customerPermitted = chance(
    random,
    profile.permission.granularKnowledge,
  );

  if (profile.id === 'enterprise_co_delivery') {
    const authorFee = revised ? 400_000 : 200_000;
    const royalty = sample.knowledgeGrossValue * 0.20;
    return offeredFlow({
      option: revised
        ? 'knowledge_module_400k_plus_20pct'
        : 'knowledge_fixed_200k_plus_20pct',
      providerUtility: authorFee + royalty - labor - controlledIpRisk,
      baaoImmediateCash: -authorFee - opsCost,
      baaoTotalValue:
        -authorFee - opsCost + sample.knowledgeGrossValue * 0.80,
      opsHours: sample.baaoKnowledgeHours,
      customerPermitted,
    });
  }

  const royalty = revised
    ? Math.max(300_000, sample.knowledgeGrossValue * 0.40)
    : sample.knowledgeGrossValue * 0.40;
  return offeredFlow({
    option: revised
      ? 'knowledge_300k_minimum_against_40pct'
      : 'knowledge_40pct_royalty_no_advance',
    providerUtility: royalty - labor - controlledIpRisk,
    baaoImmediateCash: revised ? -300_000 - opsCost : -opsCost,
    baaoTotalValue: -opsCost + sample.knowledgeGrossValue - royalty,
    opsHours: sample.baaoKnowledgeHours,
    customerPermitted,
  });
}

function fairnessScore(random, regime, profile, providerUtilityTotal) {
  let base;
  if (regime === 'current_handbook') {
    base = profile.facts.baaoLead ? 5.1 : 2.4;
  } else if (regime === 'v1_2') {
    base = 4.2;
  } else {
    base = 5.6;
  }
  if (providerUtilityTotal < 0) base -= 0.6;
  return clamp(base + uniform(random, [-0.7, 0.7]), 1, 7);
}

function simulateRun(random, regime, profile) {
  const sample = sampleProfile(random, profile);
  const flows = {
    lead: emptyFlow('Not evaluated yet.'),
    delivery: emptyFlow('Not evaluated yet.'),
    case: emptyFlow('Not evaluated yet.'),
    knowledge: emptyFlow('Not evaluated yet.'),
  };

  if (regime === 'current_handbook') {
    if (profile.facts.baaoLead) {
      flows.lead = referralFlow(profile, sample);
      flows.delivery = emptyFlow('Referral-only classification has no BAAO delivery role.');
      flows.case = emptyFlow('Current R classification does not verify a publishable case.');
      flows.knowledge = emptyFlow('Current R classification does not license knowledge.');
    } else {
      const bundle = currentCBundle(random, profile, sample);
      flows.case = bundle;
      flows.delivery = profile.facts.baaoDelivery
        ? aliasFlow(bundle, 'delivery_bundled_into_cbaa')
        : emptyFlow('BAAO has no delivery role.');
      flows.knowledge = bundle.option === 'cbaa_5pct_plus_case_recipe'
        ? aliasFlow(bundle, 'knowledge_bundled_into_cbaa')
        : emptyFlow('The 12% option does not include a knowledge asset.');
    }
  } else if (regime === 'v1_2') {
    flows.lead = referralFlow(profile, sample);
    flows.delivery = coDeliveryFlow(profile, sample);
    flows.case = v12ListingFlow(random, profile, sample);
    flows.knowledge = flows.case.option === 'listing_free_with_case_recipe'
      ? aliasFlow(flows.case, 'knowledge_bundled_into_free_listing')
      : emptyFlow('The rationally selected case-only path does not include knowledge.');
  } else {
    const revised = regime === 'proposed_v2_revised';
    flows.lead = referralFlow(profile, sample);
    flows.delivery = coDeliveryFlow(profile, sample);
    flows.case = proposedCaseFlow(random, profile, sample, revised);
    flows.knowledge = proposedKnowledgeFlow(random, profile, sample, revised);
  }

  const economicFlows = Object.values(flows);
  const providerUtilityTotal = economicFlows.reduce(
    (total, flow) => total + (flow.completed ? flow.providerUtility : 0),
    0,
  );
  const baaoImmediateCashRealized = economicFlows.reduce(
    (total, flow) => total + (flow.completed ? flow.baaoImmediateCash : 0),
    0,
  );
  const baaoTotalValueRealized = economicFlows.reduce(
    (total, flow) => total + (flow.completed ? flow.baaoTotalValue : 0),
    0,
  );
  const opsHoursRealized = economicFlows.reduce(
    (total, flow) => total + (flow.completed ? flow.opsHours : 0),
    0,
  );
  const distributionProbability = {
    current_handbook: 0.65,
    v1_2: 0.78,
    proposed_v2_initial: 0.95,
    proposed_v2_revised: 0.95,
  }[regime];

  return {
    flows,
    providerUtilityTotal,
    baaoImmediateCashRealized,
    baaoTotalValueRealized,
    opsHoursRealized,
    fairness: fairnessScore(random, regime, profile, providerUtilityTotal),
    distributionSlaMet:
      flows.case.completed && chance(random, distributionProbability),
  };
}

function percentile(values, fraction) {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const index = Math.min(
    sorted.length - 1,
    Math.max(0, Math.round((sorted.length - 1) * fraction)),
  );
  return sorted[index];
}

function roundNumber(value, digits = 0) {
  if (value === null || Number.isNaN(value)) return null;
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function distribution(values, digits = 0) {
  return {
    p10: roundNumber(percentile(values, 0.10), digits),
    median: roundNumber(percentile(values, 0.50), digits),
    p90: roundNumber(percentile(values, 0.90), digits),
  };
}

function summarizeFlow(runs, flowName) {
  const flows = runs.map((run) => run.flows[flowName]);
  const offered = flows.filter((flow) => flow.offered);
  const completed = offered.filter((flow) => flow.completed);
  const optionCounts = {};
  for (const flow of offered) {
    optionCounts[flow.option] = (optionCounts[flow.option] ?? 0) + 1;
  }
  const optionMix = Object.fromEntries(
    Object.entries(optionCounts).map(([option, count]) => [
      option,
      roundNumber(count / offered.length, 4),
    ]),
  );

  return {
    offered: offered.length > 0,
    offerCount: offered.length,
    optionMix,
    providerAcceptanceRate: offered.length
      ? roundNumber(
          offered.filter((flow) => flow.providerAccepted).length / offered.length,
          4,
        )
      : null,
    baaoAcceptanceRate: offered.length
      ? roundNumber(
          offered.filter((flow) => flow.baaoAccepted).length / offered.length,
          4,
        )
      : null,
    customerPermissionRate: offered.length
      ? roundNumber(
          offered.filter((flow) => flow.customerPermitted).length / offered.length,
          4,
        )
      : null,
    completionRate: offered.length
      ? roundNumber(completed.length / offered.length, 4)
      : null,
    providerUtilityYen: distribution(
      offered.map((flow) => flow.providerUtility),
    ),
    baaoImmediateCashYenWhenCompleted: distribution(
      completed.map((flow) => flow.baaoImmediateCash),
    ),
    baaoTotalValueYenWhenCompleted: distribution(
      completed.map((flow) => flow.baaoTotalValue),
    ),
    opsHoursWhenCompleted: distribution(
      completed.map((flow) => flow.opsHours),
      1,
    ),
  };
}

const random = mulberry32(SEED);
const raw = Object.fromEntries(
  regimes.map((regime) => [
    regime,
    Object.fromEntries(
      profiles.map((profile) => [
        profile.id,
        Array.from({ length: ITERATIONS }, () =>
          simulateRun(random, regime, profile),
        ),
      ]),
    ),
  ]),
);

const caseResults = {};
for (const regime of regimes) {
  caseResults[regime] = {};
  for (const profile of profiles) {
    const runs = raw[regime][profile.id];
    const completedCases = runs.filter((run) => run.flows.case.completed);
    const caseOps = completedCases
      .filter((run) => run.flows.case.caseSlaApplies)
      .map((run) => run.flows.case.caseOpsHours);
    const distributionRuns = completedCases.length;
    caseResults[regime][profile.id] = {
      label: profile.label,
      facts: profile.facts,
      flows: Object.fromEntries(
        ['lead', 'delivery', 'case', 'knowledge'].map((flowName) => [
          flowName,
          summarizeFlow(runs, flowName),
        ]),
      ),
      realizedPortfolioPerOfferedCase: {
        providerUtilityYen: distribution(
          runs.map((run) => run.providerUtilityTotal),
        ),
        baaoImmediateCashYen: distribution(
          runs.map((run) => run.baaoImmediateCashRealized),
        ),
        baaoTotalValueYen: distribution(
          runs.map((run) => run.baaoTotalValueRealized),
        ),
        opsHours: distribution(
          runs.map((run) => run.opsHoursRealized),
          1,
        ),
      },
      fairnessProxy7Point: distribution(
        runs.map((run) => run.fairness),
        1,
      ),
      caseOpsHours: distribution(caseOps, 1),
      distributionSlaRate: distributionRuns
        ? roundNumber(
            completedCases.filter((run) => run.distributionSlaMet).length /
              distributionRuns,
            4,
          )
        : null,
    };
  }
}

const aggregateResults = {};
for (const regime of regimes) {
  const allRuns = profiles.flatMap((profile) => raw[regime][profile.id]);
  const offeredCaseFlows = allRuns
    .map((run) => run.flows.case)
    .filter((flow) => flow.offered);
  const completedCaseRuns = allRuns.filter((run) => run.flows.case.completed);
  const offeredKnowledgeFlows = allRuns
    .map((run) => run.flows.knowledge)
    .filter((flow) => flow.offered);
  const commercialFlows = allRuns.flatMap((run) => [
    run.flows.lead,
    run.flows.delivery,
  ]).filter((flow) => flow.offered);
  const fairnessValues = allRuns.map((run) => run.fairness);
  const caseOpsValues = completedCaseRuns
    .filter((run) => run.flows.case.caseSlaApplies)
    .map((run) => run.flows.case.caseOpsHours);
  const distributionRate = completedCaseRuns.length
    ? completedCaseRuns.filter((run) => run.distributionSlaMet).length /
      completedCaseRuns.length
    : null;
  const fairnessMedian = percentile(fairnessValues, 0.50);
  const caseOpsMedian = percentile(caseOpsValues, 0.50);

  aggregateResults[regime] = {
    expectedPublishedCasesOutOf3: roundNumber(
      offeredCaseFlows.filter((flow) => flow.completed).length / ITERATIONS,
      2,
    ),
    expectedLicensedKnowledgeAssetsOutOf2Offers: offeredKnowledgeFlows.length
      ? roundNumber(
          offeredKnowledgeFlows.filter((flow) => flow.completed).length /
            ITERATIONS,
          2,
        )
      : 0,
    commercialFlowCompletionRate: commercialFlows.length
      ? roundNumber(
          commercialFlows.filter((flow) => flow.completed).length /
            commercialFlows.length,
          4,
        )
      : null,
    baaoImmediateCashYenAcross3Cases: distribution(
      Array.from({ length: ITERATIONS }, (_, index) =>
        profiles.reduce(
          (total, profile) =>
            total + raw[regime][profile.id][index].baaoImmediateCashRealized,
          0,
        ),
      ),
    ),
    baaoTotalValueYenAcross3Cases: distribution(
      Array.from({ length: ITERATIONS }, (_, index) =>
        profiles.reduce(
          (total, profile) =>
            total + raw[regime][profile.id][index].baaoTotalValueRealized,
          0,
        ),
      ),
    ),
    opsHoursAcross3Cases: distribution(
      Array.from({ length: ITERATIONS }, (_, index) =>
        profiles.reduce(
          (total, profile) =>
            total + raw[regime][profile.id][index].opsHoursRealized,
          0,
        ),
      ),
      1,
    ),
    fairnessProxy7Point: distribution(fairnessValues, 1),
    caseOpsHoursWhenPublished: distribution(caseOpsValues, 1),
    distributionSlaRate: roundNumber(distributionRate, 4),
    stopConditionProxy: {
      fairnessMedianBelow4: fairnessMedian < 4,
      medianCaseOpsAbove8Hours: caseOpsMedian !== null && caseOpsMedian > 8,
      distributionSlaBelow90Pct:
        distributionRate !== null && distributionRate < 0.90,
    },
  };
}

const result = {
  meta: {
    generatedAt: '2026-07-16',
    iterations: ITERATIONS,
    seed: SEED,
    modelType: 'deterministic Monte Carlo decision simulation',
    status:
      'Synthetic pilot. The output is a decision aid, not observed stakeholder behavior.',
  },
  boundaries: [
    'Graph facts are used only for role and relationship structure.',
    'Personal KG was unavailable with 401, so no private preference was imputed as fact.',
    'All monetary values, probabilities, hours, and fairness scores are explicit hypotheses.',
    'A completed flow requires provider acceptance, BAAO non-negative modeled total value, and any required customer permission.',
    'Immediate cash excludes expected future license sales. Total value includes the modeled content or license asset value.',
  ],
  candidateRateCardYen: {
    referral: { rate: '10% GCV', evidenceWindow: '12 months' },
    coDeliveryStandard: 500_000,
    verifiedCaseLite: 60_000,
    verifiedCaseStandard: 150_000,
    commissionedCaseAuthorFee: 150_000,
    knowledgeModuleAuthorFee: 400_000,
    knowledgeModuleRoyalty: '20% of net sales',
    knowledgeRoyaltyMinimumGuarantee: 300_000,
    knowledgeRoyaltyShare: '40% of net sales, minimum guarantee recoupable',
    fullPlaybookRule:
      'More than 16 author hours requires an individually scoped quote; do not bundle it with Case Listing.',
  },
  profiles: profiles.map(({ id, label, facts, gcv, nsr }) => ({
    id,
    label,
    facts,
    gcv,
    nsr,
  })),
  assumptions: Object.fromEntries(
    profiles.map((profile) => [
      profile.id,
      {
        providerHourlyCostYen: profile.providerHourlyCost,
        providerCaseHours: profile.providerCaseHours,
        providerRecipeHours: profile.providerRecipeHours,
        baaoCaseHours: profile.baaoCaseHours,
        baaoCaseLiteHours: profile.baaoCaseLiteHours,
        baaoKnowledgeHours: profile.baaoKnowledgeHours,
        distributionValueYen: profile.distributionValue,
        brandValueYen: profile.brandValue,
        supervisionValueYen: profile.supervisionValue,
        deliveryCostYen: profile.deliveryCost,
        caseAssetValueYen: profile.caseAssetValue,
        knowledgeGrossValueYen: profile.knowledgeGrossValue,
        ipRiskYen: profile.ipRisk,
        permissionProbability: profile.permission,
      },
    ]),
  ),
  aggregateResults,
  caseResults,
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`, 'utf8');
console.log(`Wrote ${outputPath}`);
console.log(
  JSON.stringify(
    {
      meta: result.meta,
      aggregateResults: result.aggregateResults,
    },
    null,
    2,
  ),
);
