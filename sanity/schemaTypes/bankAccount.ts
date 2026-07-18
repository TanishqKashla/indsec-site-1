import { defineField, defineType } from "sanity";

/**
 * Bank Account — one designated Upstream Client Nodal Bank Account (USCNBA)
 * card shown on the /disclosures/client-bank-account page. Add or edit an
 * account in the Studio and it appears on the site automatically — no code
 * change needed.
 */
export const bankAccountType = defineType({
  name: "bankAccount",
  title: "Bank Account",
  type: "document",
  fields: [
    defineField({
      name: "bankName",
      title: "Bank name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "branch",
      title: "Branch address",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "accountNumber",
      title: "Account number",
      type: "string",
      description: "Entered as text so leading zeros are preserved.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ifsc",
      title: "IFSC",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      title: "Tag",
      type: "string",
      description: "The small pill shown above the bank name.",
      initialValue: "USCNBA Account",
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
        { field: "bankName", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "bankName", subtitle: "accountNumber", order: "order" },
    prepare({ title, subtitle, order }) {
      const orderText =
        order === undefined || order === null ? undefined : `#${order}`;
      return {
        title: title || "Untitled account",
        subtitle: [subtitle, orderText].filter(Boolean).join(" · "),
      };
    },
  },
});
