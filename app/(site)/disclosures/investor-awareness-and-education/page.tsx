import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { getVideoSections, type Video } from "@/lib/investorAwarenessVideos";

export const metadata: Metadata = {
  title: "Investor Awareness & Education",
  description:
    "Investor awareness and education videos curated by Indsec — BSE & NSE educational series, expert podcasts, and animated explainers on safe investing.",
};

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

export default async function InvestorAwarenessEducationPage() {
  const sections = await getVideoSections();

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
      {sections.length === 0 ? (
        <section className="section">
          <div className="container" style={{ maxWidth: 920 }}>
            <p className="lead text-center">
              Investor awareness videos will appear here soon.
            </p>
          </div>
        </section>
      ) : (
        sections.map((sec, i) => (
          <section
            key={sec._id}
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
        ))
      )}
    </>
  );
}
