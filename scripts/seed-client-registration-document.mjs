/**
 * Seed the "Client Registration Documents" bucket in Sanity with exactly the
 * documents that were previously hard-coded on
 * /disclosures/client-registration-document.
 *
 * File entries (PDF / ZIP) upload the file from public/documents/ as a Sanity
 * asset; the "Page" entry stores only its external URL. Each becomes a
 * `clientRegistrationDoc` with the same title, description, section, kind and
 * display order the page used.
 *
 * Usage (from the project root):
 *   node scripts/seed-client-registration-document.mjs           # create missing
 *   node scripts/seed-client-registration-document.mjs --force   # re-upload & overwrite
 *   node scripts/seed-client-registration-document.mjs --dry     # preview, write nothing
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
// File entries carry `file` (a real filename in public/documents/). The Page
// entry carries `url` and no file.
const SEED = [
  // Broking — Account Opening
  {
    section: "broking-account-opening",
    kind: "ZIP",
    title: "Account Opening Kit — Individual",
    description:
      "Complete trading account opening kit for individual broking clients.",
    file: "Account Opening Kit - Individual.zip",
  },
  {
    section: "broking-account-opening",
    kind: "ZIP",
    title: "Account Opening Kit — Non-Individual",
    description:
      "Complete trading account opening kit for non-individual / corporate clients.",
    file: "Account Opening Kit - Non Individual.zip",
  },
  {
    section: "broking-account-opening",
    kind: "PDF",
    title: "Account Opening (Part B) — Rights & Obligations",
    description:
      "Rights & obligations, risk disclosure and guidance note (Part B), 2024.",
    file: "Account Opening Kit (Part B) - Rights & Obligations - 2024.pdf",
  },
  // Depository (DP) — Account Opening
  {
    section: "dp-account-opening",
    kind: "ZIP",
    title: "DP Account Opening Kit — Individual",
    description:
      "Demat (depository participant) account opening kit for individual clients.",
    file: "DP - Account Opening Kit - Individual_latest.zip",
  },
  {
    section: "dp-account-opening",
    kind: "ZIP",
    title: "DP Account Opening Kit — Non-Individual",
    description:
      "Demat (depository participant) account opening kit for non-individual clients.",
    file: "DP - Account Opening Kit - Non-Individual.zip",
  },
  // KYC Updation
  {
    section: "kyc-updation",
    kind: "PDF",
    title: "KYC Updation — Individual",
    description: "Form to update / modify KYC details for individual clients.",
    file: "KYC Modification - Individual.pdf",
  },
  {
    section: "kyc-updation",
    kind: "PDF",
    title: "KYC Updation — Non-Individual",
    description:
      "Form to update KYC details for non-individual / corporate clients.",
    file: "KYC Updation - Non Individual.pdf",
  },
  // Nomination
  {
    section: "nomination",
    kind: "PDF",
    title: "Nomination Form — Broking & DP",
    description:
      "Nomination / opt-out declaration form for broking and depository accounts.",
    file: "Broking and DP - Nomination Form.pdf",
  },
  // Additional Resources
  {
    section: "additional-resources",
    kind: "Page",
    title:
      "Rights & Obligations, RDD & Guidance Note — Vernacular Languages",
    description:
      "Rights & obligations, risk disclosure document and guidance note in regional languages, hosted by NSE.",
    url: "https://www.nseindia.com/trade/members-client-registration-documents",
  },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Stable, human-readable document id so re-running updates the same documents.
function docIdFor(entry) {
  const basis = entry.file ? entry.file.replace(/\.[a-z0-9]+$/i, "") : entry.title;
  return `client-registration-doc.${slugify(basis)}`;
}

function contentTypeFor(file) {
  return /\.zip$/i.test(file) ? "application/zip" : "application/pdf";
}

async function run() {
  console.log(
    `Seeding "Client Registration Documents" → project ${projectId}, dataset ${dataset}` +
      `${DRY ? " (dry run)" : ""}${FORCE ? " (force)" : ""}\n`,
  );

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < SEED.length; i++) {
    const entry = SEED[i];
    const order = i + 1;
    const _id = docIdFor(entry);

    if (entry.file) {
      const pdfPath = join(PDF_DIR, entry.file);
      if (!existsSync(pdfPath)) {
        console.error(`✗ ${entry.title} — file not found: ${entry.file}`);
        failed++;
        continue;
      }
    }

    const existing = DRY ? null : await client.getDocument(_id);
    if (existing && !FORCE) {
      console.log(`• skip  ${entry.title} (already exists)`);
      skipped++;
      continue;
    }

    if (DRY) {
      const src = entry.file ? entry.file : entry.url;
      console.log(
        `→ would seed  ${entry.title}  [${entry.section} · ${entry.kind} #${order}]  ← ${src}`,
      );
      created++;
      continue;
    }

    try {
      const doc = {
        _id,
        _type: "clientRegistrationDoc",
        section: entry.section,
        kind: entry.kind,
        title: entry.title,
        description: entry.description,
        order,
      };

      if (entry.file) {
        const buffer = await readFile(join(PDF_DIR, entry.file));
        const asset = await client.assets.upload("file", buffer, {
          filename: entry.file,
          contentType: contentTypeFor(entry.file),
        });
        doc.file = {
          _type: "file",
          asset: { _type: "reference", _ref: asset._id },
        };
      } else {
        doc.url = entry.url;
      }

      await client.createOrReplace(doc);

      console.log(
        `✓ seeded  ${entry.title}  [${entry.section} · ${entry.kind} #${order}]`,
      );
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
