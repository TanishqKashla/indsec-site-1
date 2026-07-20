import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

/**
 * Server-side Sanity client.
 *
 * A read token is required even though the dataset is "public": documents
 * seeded with a dot in their _id (e.g. "corporate-disclosure.agm-notice-2021")
 * live on a sub-path, and public/anonymous read access only covers root-path
 * documents — the same rule that keeps `drafts.*` private. Without the token
 * those documents are invisible to the site while still showing in the Studio.
 *
 * All queries run in server components, so the token is never sent to the
 * browser. `perspective: "published"` keeps unpublished drafts off the site.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
  token: process.env.SANITY_API_READ_TOKEN,
});
