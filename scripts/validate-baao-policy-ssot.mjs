import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const HANDBOOK = "docs/internal/OPERATIONS_HANDBOOK.md";
const REQUIRED_FILES = [
  HANDBOOK,
  "docs/people/README.md",
  "docs/governance/README.md",
  "README.md",
  "website/app/fellows/page.tsx",
];
const CURRENT_POLICY_SURFACES = [
  "docs/cases/README.md",
  "docs/WIREFRAMES.md",
  "docs/templates/BOOST_QUARTER_PROJECTS_TEMPLATE.md",
  "docs/templates/PRIME_EXECUTIVE_COMMUNITY_TEMPLATE.md",
  "docs/templates/RECIPES_PLAYBOOKS_TEMPLATE.md",
  "docs/content/CONTENT_AGENDA_LECTURE.md",
];

const REQUIRED_HANDBOOK_TERMS = [
  ["centerpin", "寄与した分だけ名乗り、受け取った価値には返し、断る自由を守る。"],
  ["Referral", "Referral"],
  ["Co-Delivery", "Co-Delivery"],
  ["Case Verification", "Case Verification"],
  ["Knowledge Asset License", "Knowledge Asset License"],
  ["Activity Ledger", "Activity Ledger"],
];

const LEGACY_PATTERNS = [
  ["Impact Points", /Impact Points/i],
  ["功績点", /功績点/],
  ["PC 12%", /PC\s*12\s*%/i],
  ["PC 5%", /PC\s*5\s*%/i],
  ["Influenced Revenue", /Influenced Revenue/i],
  ["Delegated 55%", /Delegated.{0,10}55\s*%/i],
];

export function validatePolicySnapshot(snapshot) {
  const errors = [];

  for (const file of REQUIRED_FILES) {
    if (!(file in snapshot)) {
      errors.push(`required file is missing: ${file}`);
    }
  }

  const handbook = snapshot[HANDBOOK] ?? "";
  for (const [label, term] of REQUIRED_HANDBOOK_TERMS) {
    if (!handbook.includes(term)) {
      errors.push(`Handbook is missing ${label}`);
    }
  }

  for (const [file, content] of Object.entries(snapshot)) {
    for (const [label, pattern] of LEGACY_PATTERNS) {
      if (pattern.test(content)) {
        errors.push(`${file}: legacy term remains: ${label}`);
      }
    }
  }

  const readme = snapshot["README.md"] ?? "";
  if (/¥\s*220,?000/.test(readme)) {
    errors.push("README.md: 旧評議会価格が残っています");
  }
  if (!/¥\s*2,?000,?000/.test(readme)) {
    errors.push("README.md: current council price is missing");
  }

  return errors;
}

async function collectSourceFiles(rootDir, relativeDir) {
  const absoluteDir = path.join(rootDir, relativeDir);
  const entries = await readdir(absoluteDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === "archive" || entry.name.endsWith(".backup")) continue;
    const relativePath = path.posix.join(relativeDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(rootDir, relativePath)));
    } else if (/\.(?:ts|tsx)$/.test(entry.name)) {
      files.push(relativePath);
    }
  }

  return files;
}

async function loadCurrentSnapshot(rootDir) {
  const websiteFiles = [
    ...(await collectSourceFiles(rootDir, "website/app")),
    ...(await collectSourceFiles(rootDir, "website/components")),
  ];
  const files = [...new Set([...REQUIRED_FILES, ...CURRENT_POLICY_SURFACES, ...websiteFiles])];
  const snapshot = {};

  for (const file of files) {
    snapshot[file] = await readFile(path.join(rootDir, file), "utf8");
  }

  return snapshot;
}

async function main() {
  const rootDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
  const snapshot = await loadCurrentSnapshot(rootDir);
  const errors = validatePolicySnapshot(snapshot);

  if (errors.length > 0) {
    console.error("BAAO policy SSOT validation failed:");
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }

  console.log("BAAO policy SSOT validation passed.");
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  await main();
}
