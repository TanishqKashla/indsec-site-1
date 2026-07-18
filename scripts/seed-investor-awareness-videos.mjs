/**
 * Seed the "Investor Awareness Videos" bucket in Sanity with exactly the video
 * sections that were previously hard-coded on
 * /disclosures/investor-awareness-and-education.
 *
 * These are plain documents (no file uploads). Each becomes a `videoSection`
 * with the same heading, source, lead, ordered video list and display order the
 * page used.
 *
 * Usage (from the project root):
 *   node scripts/seed-investor-awareness-videos.mjs           # create missing
 *   node scripts/seed-investor-awareness-videos.mjs --force   # overwrite existing
 *   node scripts/seed-investor-awareness-videos.mjs --dry     # preview, write nothing
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

/* ---- the sections, exactly as the page listed them ----------------------- */
const SEED = [
  {
    heading: "BSE Educational Series",
    source: "BSE",
    lead: "Foundational principles of long-term, regulated investing.",
    videos: [
      { id: "I70i3gYB2gQ", title: "Be an Investor, Not a Follower" },
      { id: "Jy5MOwUFL3Y", title: "Investing is a marathon, not a sprint race" },
      { id: "O4Q3tQ882IQ", title: "Investment is about compounding, not doubling" },
      { id: "udhZSubsRjg", title: "Hollow investments will give hollow returns" },
      { id: "cDklU-QGSVc", title: "Invest only in regulated products" },
      { id: "oHj_PQ11T-M", title: "Always update your contact details with your Broker & DP" },
      { id: "vvut32oFjXs", title: "Contract note is as good as your invoice — very important" },
      { id: "M1_mjkwx0hk", title: "Online Dispute Resolution (ODR)" },
    ],
  },
  {
    heading: "NSE — Father & Son Series",
    source: "NSE",
    lead: "Everyday investor concerns, explained simply.",
    videos: [
      { id: "Ka4fBhjZxeY", title: "Matching investments to your risk profile" },
      { id: "VEKsy4jnZ3I", title: "Trade smart, trade safe: Always verify all communication from the exchange!" },
      { id: "6653Rg8Uj5A", title: "Invest safely: Beware of online influencers while investing in capital markets" },
      { id: "_-dByuQvihc", title: "Safeguard measures provided by NSE through its Investor Protection Fund (IPF)" },
      { id: "-vQVqvvlriw", title: "Investing in IPOs is like picking your team for a game!" },
    ],
  },
  {
    heading: "Podcasts with Industry Leaders",
    source: "NSE",
    lead: "Extended conversations on personal finance, asset allocation, tax and retirement planning.",
    videos: [
      { id: "ur5GJYoMc2I", title: "Ashishkumar Chauhan (MD & CEO, NSE) — Best way to learn about the securities market / personal finance" },
      { id: "9lErL_ydmuY", title: "Master your money: Asset allocation by Nilesh Shah (MD, Kotak Mahindra Mutual Fund)" },
      { id: "HfnV-kfc0h0", title: "Swarup Mohanty (CEO & Director, Mirae Asset Investment Managers) — F.I.R.E" },
      { id: "DPbf83DWl-o", title: "Aashish Somaiyya (ED & CEO, WhiteOak MF) — Financial podcast for beginners, millennials and Gen Z" },
      { id: "hn9Dd4FVq_o", title: "Unbiased financial education by Nimesh Shah (MD & CEO, ICICI Prudential AMC)" },
      { id: "T_hJr3R0yaA", title: "Building a resilient investment portfolio by Navneet Munot (MD & CEO, HDFC MF; Chairman, AMFI)" },
      { id: "-UjtFYGLfXk", title: "Power of impact investing by Amit Chandra (Chairperson & Founder, Bain Capital India)" },
      { id: "kVZ1TW4X7eY", title: "Long-term financial plan by A Balasubramanian (MD & CEO, Aditya Birla Sun Life Mutual Fund)" },
      { id: "-5FQp8WztE8", title: "Adapting to economic downturns & recessions by the Chairman of Motilal Oswal Financial Services" },
      { id: "FdDrDFJ2eXw", title: "Tax planning for individuals by Deepashree Shetty (Partner, Tax & Regulatory Services, BDO India)" },
      { id: "CaXyFZbbF6w", title: "Retirement planning for individuals by Rahul Jain (President & Head, Nuvama Wealth)" },
      { id: "r7jdAYvK0M0", title: "Investing in REITs by Ritwik Bhattacharjee (CIO, Embassy Office Parks REIT)" },
      { id: "4C-OS3MG8gI", title: "Healthy money habits by DP Singh (Deputy Managing Director, SBI Mutual Fund)" },
      { id: "wKMx48yypSo", title: "Best practices for long-term investing by S Naren (ED & CIO, ICICI Prudential Mutual Fund)" },
      { id: "j27Q2mbW87o", title: "An aware investor is a good investor by Ashwani Bhatia (WTM, SEBI)" },
    ],
  },
  {
    heading: "Money Minded Malini",
    source: "NSE · Shraddha Jain",
    lead: "Short, relatable episodes on common investing pitfalls.",
    videos: [
      { id: "gFdroVBFZ94", title: "Ep. 1: Unsolicited stock tips" },
      { id: "ZRsoMyX2NfU", title: "Ep. 2: Do not share your trading password!" },
      { id: "5sLNvqGkO2I", title: "Ep. 3: Take an informed decision before trading in derivatives" },
    ],
  },
  {
    heading: "In Collaboration with Moneycontrol",
    source: "Moneycontrol",
    lead: "Practical investor-safety messages.",
    videos: [
      { id: "ZbYKoczDq2w", title: "Importance of updated KYC details" },
      { id: "cEcn6VLyb_w", title: "Beware of assured returns" },
      { id: "jJr3zqGqpms", title: "Beware of unsolicited stock tips" },
      { id: "f2gjQCkwDHQ", title: "Guidelines to invest safely in the stock market" },
      { id: "fkgpzS7YLz4", title: "Things to check before investing in an IPO" },
      { id: "CsmzBI4LoDc", title: "Importance of due diligence in trading" },
      { id: "u7Vmo1anltU", title: "NSE Explainer: Green Bond" },
    ],
  },
  {
    heading: "NSE — Animated Explainers",
    source: "NSE",
    lead: "Bite-sized explainers on risk, surveillance and trading mechanics.",
    videos: [
      { id: "TE0pEpV7U4E", title: "A guide to risk assessment for investors" },
      { id: "tEe6gYMA5jQ", title: "Always keep track of any communication from the exchange!" },
      { id: "Ja9Qybe2pNY", title: "Unlocking investor support: NSE Investor Service Centres (ISCs) explained" },
      { id: "qK7PJCJlSMA", title: "Mastering investment decision-making: validating rumours & media influence" },
      { id: "ZLd04xPJhLw", title: "Stocks under surveillance measures: ASM, ESM, GSM" },
      { id: "zrmhJBser28", title: "NSE trading supported by blocked amount in the secondary market" },
    ],
  },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Stable id from the heading so re-running updates the same document.
function docIdFor(heading) {
  return `video-section.${slugify(heading)}`;
}

async function run() {
  console.log(
    `Seeding "Investor Awareness Videos" → project ${projectId}, dataset ${dataset}` +
      `${DRY ? " (dry run)" : ""}${FORCE ? " (force)" : ""}\n`,
  );

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < SEED.length; i++) {
    const entry = SEED[i];
    const order = i + 1;
    const _id = docIdFor(entry.heading);

    const existing = DRY ? null : await client.getDocument(_id);
    if (existing && !FORCE) {
      console.log(`• skip  ${entry.heading} (already exists)`);
      skipped++;
      continue;
    }

    if (DRY) {
      console.log(
        `→ would seed  ${entry.heading}  [${entry.source} · ${entry.videos.length} videos #${order}]`,
      );
      created++;
      continue;
    }

    try {
      await client.createOrReplace({
        _id,
        _type: "videoSection",
        heading: entry.heading,
        source: entry.source,
        lead: entry.lead,
        order,
        videos: entry.videos.map((v, vi) => ({
          _type: "video",
          _key: `${slugify(entry.heading)}-${vi}`,
          id: v.id,
          title: v.title,
        })),
      });
      console.log(
        `✓ seeded  ${entry.heading}  [${entry.source} · ${entry.videos.length} videos #${order}]`,
      );
      created++;
    } catch (err) {
      console.error(`✗ ${entry.heading} — ${err?.message || err}`);
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
