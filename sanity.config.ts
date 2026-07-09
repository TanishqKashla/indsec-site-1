/**
 * Sanity Studio configuration.
 *
 * This powers the embedded Studio mounted at /studio (see
 * app/studio/[[...tool]]/page.tsx). It is also read by the Sanity CLI.
 */
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "default",
  title: "Indsec CMS",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
    // Lets a category folder create reports with its category pre-filled.
    templates: (prev) => [
      ...prev,
      {
        id: "report-by-category",
        title: "Report (with category)",
        schemaType: "report",
        parameters: [{ name: "category", type: "string" }],
        value: (params: { category?: string }) => ({
          category: params.category,
        }),
      },
    ],
  },
});
