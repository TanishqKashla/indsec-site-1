/**
 * Seed the "Bank Accounts" bucket in Sanity with exactly the USCNBA accounts
 * that were previously hard-coded on /disclosures/client-bank-account.
 *
 * These are plain documents (no file uploads). Each becomes a `bankAccount`
 * with the same bank name, branch, account number, IFSC, tag and display order
 * the page used.
 *
 * Usage (from the project root):
 *   node scripts/seed-bank-accounts.mjs           # create missing accounts
 *   node scripts/seed-bank-accounts.mjs --force   # overwrite existing
 *   node scripts/seed-bank-accounts.mjs --dry     # preview, write nothing
 *
 * Requires a write-enabled token. It is read from SANITY_API_WRITE_TOKEN, then
 * SANITY_API_TOKEN, from the environment or from .env.local.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

import { createClient } from "@sanity/client";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const FORCE = process.argv.includes("--force");
const DRY = process.argv.includes("--dry");

/* ---- minimal .env.local loader (no dependency) --------------------------- */
function loadEnvLocal() {
  const envPath = join(ROOT, ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}
loadEnvLocal();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";
const token =
  process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN;

if (!projectId || !dataset) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID / NEXT_PUBLIC_SANITY_DATASET.",
  );
  process.exit(1);
}
if (!token && !DRY) {
  console.error(
    "Missing a write token. Set SANITY_API_WRITE_TOKEN (or SANITY_API_TOKEN) to an Editor token.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

/* ---- the accounts, exactly as the page listed them ----------------------- */
const SEED = [
  {
    bankName: "ICICI Bank Limited",
    branch:
      "215, Free Press House, Free Press Marg, Nariman Point, Mumbai - 400 021",
    accountNumber: "000405015962",
    ifsc: "ICIC0000004",
    label: "USCNBA Account",
  },
  {
    bankName: "Bank of India",
    branch: "Stock Exchange, P J Tower, Dalal Street, Fort, Mumbai - 400 023",
    accountNumber: "008620100009150",
    ifsc: "BKID0000086",
    label: "USCNBA Account",
  },
];

// Stable id from the account number so re-running updates the same document.
function docIdFor(accountNumber) {
  return `bank-account.${accountNumber.replace(/[^a-z0-9]+/gi, "")}`;
}

async function run() {
  console.log(
    `Seeding "Bank Accounts" → project ${projectId}, dataset ${dataset}` +
      `${DRY ? " (dry run)" : ""}${FORCE ? " (force)" : ""}\n`,
  );

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < SEED.length; i++) {
    const entry = SEED[i];
    const order = i + 1;
    const _id = docIdFor(entry.accountNumber);

    const existing = DRY ? null : await client.getDocument(_id);
    if (existing && !FORCE) {
      console.log(`• skip  ${entry.bankName} (already exists)`);
      skipped++;
      continue;
    }

    if (DRY) {
      console.log(`→ would seed  ${entry.bankName}  (${entry.accountNumber}) #${order}`);
      created++;
      continue;
    }

    try {
      await client.createOrReplace({
        _id,
        _type: "bankAccount",
        bankName: entry.bankName,
        branch: entry.branch,
        accountNumber: entry.accountNumber,
        ifsc: entry.ifsc,
        label: entry.label,
        order,
      });
      console.log(`✓ seeded  ${entry.bankName}  (${entry.accountNumber}) #${order}`);
      created++;
    } catch (err) {
      console.error(`✗ ${entry.bankName} — ${err?.message || err}`);
      failed++;
    }
  }

  console.log(
    `\nDone. ${created} ${DRY ? "to seed" : "created/updated"}, ${skipped} skipped, ${failed} failed.`,
  );
  if (failed > 0) process.exitCode = 1;
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
