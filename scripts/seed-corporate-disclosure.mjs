/**
 * Seed the "Corporate Disclosure" bucket in Sanity with exactly the documents
 * that were previously hard-coded on /disclosures/corporate-disclosure.
 *
 * For each entry it uploads the PDF from public/documents/corporate-disclosure/
 * as a Sanity asset and creates a `corporateDisclosure` document referencing it,
 * with the same title, description, section and display order the page used.
 *
 * Usage (from the project root):
 *   node scripts/seed-corporate-disclosure.mjs           # create missing docs
 *   node scripts/seed-corporate-disclosure.mjs --force   # re-upload & overwrite
 *   node scripts/seed-corporate-disclosure.mjs --dry     # preview, write nothing
 *
 * Requires a write-enabled token. It is read from SANITY_API_WRITE_TOKEN, then
 * SANITY_API_TOKEN, from the environment or from .env.local. Create an Editor
 * token at https://www.sanity.io/manage → your project → API → Tokens if the
 * existing token is read-only.
 */
import { readFileSync, existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

import { createClient } from "@sanity/client";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const PDF_DIR = join(ROOT, "public", "documents", "corporate-disclosure");

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
// `file` is the real filename in public/documents/corporate-disclosure/.
const SEED = [
  // General Meeting Notices
  {
    section: "general-meeting-notices",
    title: "AGM Notice — 2026",
    description: "Notice of the Annual General Meeting, 2026.",
    file: "AGM Notice 2026.pdf",
  },
  {
    section: "general-meeting-notices",
    title: "AGM Notice — 2025",
    description: "Notice of the Annual General Meeting, 2025.",
    file: "AGM Notice 2025.pdf",
  },
  {
    section: "general-meeting-notices",
    title: "AGM Notice — 2024",
    description: "Notice of the Annual General Meeting, 2024.",
    file: "AGM Notice - 2024.pdf",
  },
  {
    section: "general-meeting-notices",
    title: "Addendum to the Notice of AGM — 2024",
    description: "Addendum to the 2024 Annual General Meeting notice.",
    file: "Addendum to the Notice of AGM - 2024.pdf",
  },
  {
    section: "general-meeting-notices",
    title: "AGM Notice — 2023",
    description: "Notice of the Annual General Meeting, 2023.",
    file: "AGM Notice 2023.pdf",
  },
  {
    section: "general-meeting-notices",
    title: "AGM Notice — 2022",
    description: "Notice of the Annual General Meeting, 2022.",
    file: "AGM Notice 2022.pdf",
  },
  {
    section: "general-meeting-notices",
    title: "AGM Notice — 2021",
    description: "Notice of the Annual General Meeting, 2021.",
    file: "AGM Notice 2021.pdf",
  },
  {
    section: "general-meeting-notices",
    title: "EGM Notice — 01/2024-2025",
    description: "Notice of the Extraordinary General Meeting (01/2024-2025).",
    file: "EGM Notice 01_2024-2025.pdf",
  },
  // Annual Returns
  {
    section: "annual-returns",
    title: "Annual Return — 2025",
    description: "Annual return for the financial year 2024-25.",
    file: "Annual Return 2025.pdf",
  },
  {
    section: "annual-returns",
    title: "Annual Return — 31.03.2023",
    description: "Annual return as on 31 March 2023.",
    file: "Annual Return_31.03.2023.pdf",
  },
  {
    section: "annual-returns",
    title: "Annual Return — 2022",
    description: "Annual return for the financial year 2021-22.",
    file: "Annual Return 2022-latest.pdf",
  },
  {
    section: "annual-returns",
    title: "Annual Return — 2021",
    description: "Annual return for the financial year 2020-21.",
    file: "Annual Return 2021.pdf",
  },
  // Governance Policies
  {
    section: "governance-policies",
    title: "Nomination and Remuneration Policy",
    description: "The Board's nomination and remuneration policy.",
    file: "Nomination and Remuneration Policy.pdf",
  },
  {
    section: "governance-policies",
    title:
      "Terms & Conditions of Appointment of Independent Directors",
    description:
      "Terms and conditions governing the appointment of independent directors.",
    file: "Terms & Conditions of Appointment of Independent directors.pdf",
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
  return `corporate-disclosure.${slug}`;
}

async function run() {
  console.log(
    `Seeding "Corporate Disclosure" → project ${projectId}, dataset ${dataset}` +
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
        _type: "corporateDisclosure",
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
