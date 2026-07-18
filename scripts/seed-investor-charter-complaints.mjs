/**
 * Seed the "Investor Charters & Complaints" bucket in Sanity with exactly the
 * documents that were previously hard-coded on
 * /disclosures/investor-charter-complaints.
 *
 * For each entry it uploads the PDF from public/documents/ as a Sanity asset and
 * creates an `investorCharterComplaint` document referencing it, with the same
 * title, description, section and display order the page used.
 *
 * Usage (from the project root):
 *   node scripts/seed-investor-charter-complaints.mjs           # create missing
 *   node scripts/seed-investor-charter-complaints.mjs --force   # re-upload & overwrite
 *   node scripts/seed-investor-charter-complaints.mjs --dry     # preview, write nothing
 *
 * Requires a write-enabled token. It is read from SANITY_API_WRITE_TOKEN, then
 * SANITY_API_TOKEN, from the environment or from .env.local.
 */
import { readFileSync, existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

import { createClient } from "@sanity/client";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const PDF_DIR = join(ROOT, "public", "documents");

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

/* ---- the documents, exactly as the page listed them ---------------------- */
// `file` is the real filename in public/documents/.
const SEED = [
  // Investor Charters
  {
    section: "investor-charters",
    title: "Investor Charter — Stock Broker",
    description:
      "Rights, responsibilities and service standards for broking clients.",
    file: "Investor Charter for Stock Brokers_Feb2025.pdf",
  },
  {
    section: "investor-charters",
    title: "Investor Charter — Depository Participant",
    description:
      "Rights, responsibilities and service standards for depository clients.",
    file: "Investor Charter for Depositary Participants_Sep2024.pdf",
  },
  {
    section: "investor-charters",
    title: "Investor Charter — PMS",
    description:
      "Rights, responsibilities and service standards for Portfolio Management clients.",
    file: "Investor Charter in Respect of PMS_.pdf",
  },
  {
    section: "investor-charters",
    title: "Investor Charter — Research Analyst",
    description:
      "Rights, responsibilities and service standards for research clients.",
    file: "Investor Charter for Research Analysts.pdf",
  },
  // Investor Complaints Data
  {
    section: "investor-complaints-data",
    title: "Investor Complaints Data — Stock Broking",
    description:
      "Monthly disclosure of complaints received against broking activities (June 2026).",
    file: "Investor Complaints Data - Stock Broking Activities - June 2026.pdf",
  },
  {
    section: "investor-complaints-data",
    title: "Investor Complaints Data — Depository",
    description:
      "Monthly disclosure of complaints received against depository activities (June 2026).",
    file: "Investor Complaints Data - DP Activities - June 2026.pdf",
  },
  {
    section: "investor-complaints-data",
    title: "Investor Complaints Data — PMS",
    description:
      "Monthly disclosure of complaints received against PMS activities (June 2026).",
    file: "Investor Complaints Data - PMS - June 2026.pdf",
  },
];

// Stable, human-readable document id derived from the filename, so re-running
// the script updates the same documents instead of creating duplicates.
function docIdFor(file) {
  const slug = file
    .replace(/\.pdf$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `investor-charter-complaint.${slug}`;
}

async function run() {
  console.log(
    `Seeding "Investor Charters & Complaints" → project ${projectId}, dataset ${dataset}` +
      `${DRY ? " (dry run)" : ""}${FORCE ? " (force)" : ""}\n`,
  );

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < SEED.length; i++) {
    const entry = SEED[i];
    const order = i + 1;
    const _id = docIdFor(entry.file);
    const pdfPath = join(PDF_DIR, entry.file);

    if (!existsSync(pdfPath)) {
      console.error(`✗ ${entry.title} — file not found: ${entry.file}`);
      failed++;
      continue;
    }

    const existing = DRY ? null : await client.getDocument(_id);
    if (existing && !FORCE) {
      console.log(`• skip  ${entry.title} (already exists)`);
      skipped++;
      continue;
    }

    if (DRY) {
      console.log(`→ would seed  ${entry.title}  [${entry.section} #${order}]`);
      created++;
      continue;
    }

    try {
      const buffer = await readFile(pdfPath);
      const asset = await client.assets.upload("file", buffer, {
        filename: entry.file,
        contentType: "application/pdf",
      });

      await client.createOrReplace({
        _id,
        _type: "investorCharterComplaint",
        section: entry.section,
        title: entry.title,
        description: entry.description,
        order,
        pdfFile: {
          _type: "file",
          asset: { _type: "reference", _ref: asset._id },
        },
      });

      console.log(`✓ seeded  ${entry.title}  [${entry.section} #${order}]`);
      created++;
    } catch (err) {
      console.error(`✗ ${entry.title} — ${err?.message || err}`);
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
