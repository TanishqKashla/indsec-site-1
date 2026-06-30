import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getReportBySlug, getReportSlugs, getCategoryMeta } from "@/lib/reports";

export async function generateStaticParams() {
  const slugs = await getReportSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = await getReportBySlug(slug);
  if (!report) return { title: "Report not found" };
  return {
    title: `${report.title} — Indsec Research`,
    description: report.summary,
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function ReportDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = await getReportBySlug(slug);
  if (!report) notFound();

  const meta = getCategoryMeta(report.category);

  return (
    <section className="section report-detail">
      <div className="container" style={{ maxWidth: 1040 }}>
        <Link href="/research" className="report-detail__back">
          <span aria-hidden="true">←</span> Back to Research
        </Link>

        <header className="report-detail__header">
          <span
            className="report-detail__cat"
            style={{ ["--cat" as string]: meta.color }}
          >
            {meta.label}
          </span>
          <h1 className="report-detail__title">{report.title}</h1>
          <time className="report-detail__date" dateTime={report.publishedDate}>
            {formatDate(report.publishedDate)}
          </time>
          {report.summary && (
            <p className="report-detail__summary">{report.summary}</p>
          )}

          {report.tags && report.tags.length > 0 && (
            <div className="report-detail__tags">
              {report.tags.map((t) => (
                <span key={t} className="report-detail__tag">{t}</span>
              ))}
            </div>
          )}

          <div className="report-detail__actions">
            <a
              href={report.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--crimson"
              aria-label={`View PDF: ${report.title}. Opens in a new tab.`}
            >
              View PDF <span aria-hidden="true">↗</span>
            </a>
            <a
              href={report.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-crimson"
              aria-label={`Open PDF in a new tab: ${report.title}.`}
            >
              Open in new tab <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        {/* Embedded PDF */}
        <div className="report-detail__viewer">
          <iframe
            src={`${report.pdfUrl}#view=FitH`}
            title={`${report.title} (PDF)`}
            loading="lazy"
          />
          <p className="report-detail__fallback">
            Can&apos;t see the document?{" "}
            <a href={report.pdfUrl} target="_blank" rel="noopener noreferrer">
              Open the PDF in a new tab
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
