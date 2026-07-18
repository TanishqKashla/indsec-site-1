import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Video Section — one curated group of investor-awareness videos shown on the
 * /disclosures/investor-awareness-and-education page (e.g. "BSE Educational
 * Series"). Each section holds an ordered list of YouTube videos. Add a section
 * or a video in the Studio and it appears on the site automatically.
 */
export const videoSectionType = defineType({
  name: "videoSection",
  title: "Video Section",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: 'The section title, e.g. "BSE Educational Series".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      description:
        'Shown under each video card, e.g. "BSE", "NSE" or "NSE · Shraddha Jain".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lead",
      title: "Lead (optional)",
      type: "text",
      rows: 2,
      description: "A short line shown under the section heading.",
    }),
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "video",
          fields: [
            defineField({
              name: "id",
              title: "YouTube video ID",
              type: "string",
              description:
                'Just the ID from the URL — e.g. for youtube.com/watch?v=I70i3gYB2gQ enter "I70i3gYB2gQ".',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "id" },
          },
        }),
      ],
      validation: (rule) => rule.min(1),
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
        { field: "heading", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "heading", source: "source", order: "order" },
    prepare({ title, source, order }) {
      const orderText =
        order === undefined || order === null ? undefined : `#${order}`;
      return {
        title: title || "Untitled section",
        subtitle: [source, orderText].filter(Boolean).join(" · "),
      };
    },
  },
});
