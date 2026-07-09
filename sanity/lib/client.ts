import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // The dataset is public, so anonymous CDN reads are fine and fast.
  useCdn: true,
  perspective: "published",
});
