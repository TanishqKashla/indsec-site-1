import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Investor Awareness & Education",
  description:
    "Investor awareness and education videos curated by Indsec — BSE & NSE educational series, expert podcasts, and animated explainers on safe investing.",
};

type Video = { id: string; title: string };
type Section = { heading: string; source: string; lead?: string; videos: Video[] };

const SECTIONS: Section[] = [
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

function VideoCard({ video, source }: { video: Video; source: string }) {
  return (
    <a
      className="video-card"
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch on YouTube: ${video.title}. Opens in a new tab.`}
    >
      <span className="video-card__thumb">
        <Image
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt=""
          aria-hidden="true"
          width={480}
          height={270}
          unoptimized
        />
        <span className="video-card__play" aria-hidden="true">
          <span>
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </span>
      </span>
      <span className="video-card__body">
        <span className="video-card__title">{video.title}</span>
        <span className="video-card__source">{source}</span>
      </span>
    </a>
  );
}

export default function InvestorAwarenessEducationPage() {
  return (
    <>
      <PageHero
        kicker="Disclosures & Downloads"
        title="Investor Awareness & Education"
      />

      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: 920 }}>
          <p className="lead text-center">
            As part of our investor-awareness commitment, Indsec brings together
            educational videos and expert conversations curated by the
            exchanges, depositories and leading financial institutions — to help
            you invest safely, avoid common pitfalls and make informed
            decisions. Select any video to watch it on YouTube.
          </p>
        </div>
      </section>

      {/* Video sections */}
      {SECTIONS.map((sec, i) => (
        <section
          key={sec.heading}
          className={`section${i % 2 === 1 ? " section--band" : ""}`}
        >
          <div className="container">
            <SectionHeading title={sec.heading} lead={sec.lead} withRule />
            <div className="video-grid">
              {sec.videos.map((v) => (
                <VideoCard key={v.id} video={v} source={sec.source} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
