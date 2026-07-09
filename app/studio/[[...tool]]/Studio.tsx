"use client";

/**
 * Client boundary for the embedded Studio. Importing sanity.config (and the
 * full `sanity` library) here keeps it out of the React Server Components
 * graph, which would otherwise fail with "createContext is not a function".
 */
import { NextStudio } from "next-sanity/studio";

import config from "../../../sanity.config";

export function Studio() {
  return <NextStudio config={config} />;
}
