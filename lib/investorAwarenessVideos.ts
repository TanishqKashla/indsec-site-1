/**
 * Investor Awareness & Education data layer.
 *
 * The curated video sections on the /disclosures/investor-awareness-and-education
 * page are managed by the client in the Sanity Studio at /studio and read here
 * via GROQ. Each `videoSection` holds an ordered list of YouTube videos.
 */
import { client } from "@/sanity/lib/client";

export type Video = { id: string; title: string };

export type VideoSection = {
  _id: string;
  heading: string;
  source: string;
  lead?: string;
  videos: Video[];
};

const VIDEO_SECTION_PROJECTION = /* groq */ `{
  _id,
  heading,
  source,
  lead,
  "videos": videos[]{ id, title }
}`;

type RawVideoSection = {
  _id: string;
  heading?: string | null;
  source?: string | null;
  lead?: string | null;
  videos?: { id?: string | null; title?: string | null }[] | null;
};

// Revalidate at most once a minute so Studio edits appear without a redeploy.
const FETCH_OPTIONS = { next: { revalidate: 60 } } as const;

export async function getVideoSections(): Promise<VideoSection[]> {
  const query = /* groq */ `*[_type == "videoSection" && defined(heading)]
    | order(coalesce(order, 9999) asc, heading asc) ${VIDEO_SECTION_PROJECTION}`;
  const raw = await client.fetch<RawVideoSection[]>(query, {}, FETCH_OPTIONS);

  return raw
    .map((s) => ({
      _id: s._id,
      heading: s.heading ?? "",
      source: s.source ?? "",
      lead: s.lead ?? undefined,
      videos: (s.videos ?? [])
        .filter((v): v is { id: string; title?: string | null } => Boolean(v?.id))
        .map((v) => ({ id: v.id, title: v.title?.trim() || "" })),
    }))
    .filter((s) => s.videos.length > 0);
}
