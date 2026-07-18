import { defineField, defineType } from "sanity";

import {
  INVESTOR_CHARTER_SECTIONS,
  getInvestorCharterSection,
} from "../lib/investorCharterSections";

/**
 * Investor Charter / Complaint — a single downloadable PDF shown on the grouped
 * /disclosures/investor-charter-complaints page. Each document belongs to one
 * section (Investor Charters / Investor Complaints Data) and the page renders
 * one heading per section automatically.
 *
 * Upload the PDF in the Studio (or point to an external URL) and it appears on
 * the site — no code change needed. Mirrors the `pdfFile`/`pdfUrl` pattern used
 * elsewhere so an uploaded file always wins over an external URL.
 */
export const investorCharterComplaintType = defineType({
  name: "investorCharterComplaint",
  title: "Investor Charter / Complaint",
  type: "document",
  fields: [
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      description: "Which heading on the page this document appears under.",
      options: {
        list: INVESTOR_CHARTER_SECTIONS.map((s) => ({
          title: s.label,
          value: s.key,
        })),
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "A short line describing the document.",
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: "pdfFile",
      title: "PDF file (upload)",
      type: "file",
      description:
        "Upload the PDF. Takes priority over the PDF URL below. The file size is detected automatically.",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "pdfUrl",
      title: "PDF URL (alternative)",
      type: "url",
      description: "Use this instead if the PDF is hosted somewhere else.",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { pdfFile?: unknown } | undefined;
          if (!value && !parent?.pdfFile) {
            return "Upload a PDF file or provide a PDF URL.";
          }
          return true;
        }),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description:
        "Lower numbers appear first within the section. Leave blank to sort alphabetically at the end.",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "title", section: "section", order: "order" },
    prepare({ title, section, order }) {
      const label = getInvestorCharterSection(section)?.label ?? section;
      const orderText =
        order === undefined || order === null ? undefined : `#${order}`;
      return {
        title: title || "Untitled document",
        subtitle: [label, orderText].filter(Boolean).join(" · "),
      };
    },
  },
});
