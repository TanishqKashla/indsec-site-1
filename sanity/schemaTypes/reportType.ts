import { defineField, defineType } from "sanity";

import { SubcategoryInput } from "../components/SubcategoryInput";
import {
  buildReportTitle,
  CATEGORIES,
  getSubcategoryLabel,
  SUBCATEGORIES_BY_CATEGORY,
} from "../lib/reportTaxonomy";

/**
 * Research Report — a single published PDF that belongs to one category
 * (Daily / Monthly / …) and one series within it (e.g. "The Opening Bell").
 * Mirrors the `Report` shape consumed by lib/reports.ts and the research UI.
 */
export const reportType = defineType({
  name: "report",
  title: "Research Report",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: CATEGORIES.map((c) => ({ title: c.label, value: c.key })),
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subcategory",
      title: "Series",
      type: "string",
      description: "The report series. Options depend on the category above.",
      components: { input: SubcategoryInput },
      validation: (rule) =>
        rule.required().custom((value, context) => {
          if (!value) return true; // required() already covers the empty case
          const category = (context.parent as { category?: string } | undefined)
            ?.category;
          const allowed = category
            ? SUBCATEGORIES_BY_CATEGORY[category] ?? []
            : [];
          return allowed.some((s) => s.value === value)
            ? true
            : "This series does not belong to the selected category.";
        }),
    }),
    defineField({
      name: "publishedDate",
      title: "Published date",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Leave blank to auto-generate as “Series — DD Mon YYYY”. Fill it in only to override.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "The page URL. Click Generate — it is built from the series and date.",
      options: {
        source: (doc) =>
          buildReportTitle(
            doc.category as string | undefined,
            doc.subcategory as string | undefined,
            doc.publishedDate as string | undefined,
          ),
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pdfFile",
      title: "PDF file (upload)",
      type: "file",
      description:
        "Upload the report PDF. Takes priority over the PDF URL below.",
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
      name: "summary",
      title: "Summary (optional)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Published date, newest first",
      name: "dateDesc",
      by: [{ field: "publishedDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      subcategory: "subcategory",
      date: "publishedDate",
    },
    prepare({ title, category, subcategory, date }) {
      const series = getSubcategoryLabel(category, subcategory);
      return {
        title: title || buildReportTitle(category, subcategory, date),
        subtitle: [series, date].filter(Boolean).join(" · "),
      };
    },
  },
});
