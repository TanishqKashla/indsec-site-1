import { defineField, defineType } from "sanity";

import {
  CLIENT_REGISTRATION_KINDS,
  CLIENT_REGISTRATION_SECTIONS,
  getClientRegistrationSection,
} from "../lib/clientRegistrationSections";

/**
 * Client Registration Document — a single downloadable file (PDF or ZIP) or an
 * external page link shown on the grouped /disclosures/client-registration-document
 * page. Each document belongs to one section and the page renders one heading per
 * section automatically.
 *
 * The `kind` controls how the card is presented: PDF (View PDF), ZIP (Download
 * ZIP) or Page (an external link, no file). Upload a file OR provide a URL; an
 * uploaded file always wins. File size is detected automatically.
 */
export const clientRegistrationDocType = defineType({
  name: "clientRegistrationDoc",
  title: "Client Registration Document",
  type: "document",
  fields: [
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      description: "Which heading on the page this document appears under.",
      options: {
        list: CLIENT_REGISTRATION_SECTIONS.map((s) => ({
          title: s.label,
          value: s.key,
        })),
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kind",
      title: "Type",
      type: "string",
      description:
        "PDF opens inline, ZIP is a download, Page is an external link (no file — fill the URL below).",
      options: {
        list: [
          { title: "PDF (view)", value: "PDF" },
          { title: "ZIP (download)", value: "ZIP" },
          { title: "Page (external link)", value: "Page" },
        ],
        layout: "radio",
      },
      initialValue: "PDF",
      validation: (rule) =>
        rule
          .required()
          .custom((value) =>
            value && !(CLIENT_REGISTRATION_KINDS as readonly string[]).includes(value)
              ? "Unknown type."
              : true,
          ),
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
      name: "file",
      title: "File (upload — PDF or ZIP)",
      type: "file",
      description:
        "Upload the PDF or ZIP. Takes priority over the URL below. The file size is detected automatically. Leave empty for a Page link.",
      options: { accept: ".pdf,.zip,application/pdf,application/zip" },
    }),
    defineField({
      name: "url",
      title: "URL (external link or alternative)",
      type: "url",
      description:
        "Use this for a Page link, or if the file is hosted somewhere else.",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as
            | { file?: unknown; kind?: string }
            | undefined;
          if (!value && !parent?.file) {
            return "Upload a file or provide a URL.";
          }
          if (parent?.kind === "Page" && !value) {
            return "A Page link needs a URL.";
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
    select: { title: "title", section: "section", kind: "kind", order: "order" },
    prepare({ title, section, kind, order }) {
      const label = getClientRegistrationSection(section)?.label ?? section;
      const orderText =
        order === undefined || order === null ? undefined : `#${order}`;
      return {
        title: title || "Untitled document",
        subtitle: [kind, label, orderText].filter(Boolean).join(" · "),
      };
    },
  },
});
