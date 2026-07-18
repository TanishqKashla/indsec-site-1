import { defineField, defineType } from "sanity";

/**
 * Disclosure Document — a single downloadable PDF shown in the "Corporate
 * disclosure documents" section at the bottom of the main /disclosures page.
 * (The Studio bucket is labelled "Disclosure Documents"; the schema name stays
 * `corporateDocument` so existing content is not orphaned.)
 *
 * Upload the PDF in the Studio (or point to an external URL) and it appears on
 * the site automatically — no code change needed. Mirrors the `pdfFile`/`pdfUrl`
 * pattern used by `report` so an uploaded file always wins over an external URL.
 */
export const corporateDocumentType = defineType({
  name: "corporateDocument",
  title: "Disclosure Document",
  type: "document",
  fields: [
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
        "Lower numbers appear first. Leave blank to sort alphabetically at the end.",
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
    select: { title: "title", order: "order" },
    prepare({ title, order }) {
      return {
        title: title || "Untitled document",
        subtitle:
          order === undefined || order === null ? undefined : `Order: ${order}`,
      };
    },
  },
});
