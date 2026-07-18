/**
 * The sections of the /disclosures/corporate-disclosure page, in display order.
 *
 * Single source of truth shared by the Studio schema, the Studio structure, the
 * front-end page and the seed script, so they never drift apart. Intentionally
 * free of React / Sanity imports so every layer can consume it.
 */
export type CorporateDisclosureSection = {
  key: string;
  label: string;
  lead: string;
};

export const CORPORATE_DISCLOSURE_SECTIONS: readonly CorporateDisclosureSection[] =
  [
    {
      key: "general-meeting-notices",
      label: "General Meeting Notices",
      lead: "Notices of the Annual General Meetings (AGM) and Extraordinary General Meetings (EGM).",
    },
    {
      key: "annual-returns",
      label: "Annual Returns",
      lead: "Annual returns filed under the Companies Act.",
    },
    {
      key: "governance-policies",
      label: "Governance Policies",
      lead: "Board-approved corporate governance policies.",
    },
  ];

export function getCorporateDisclosureSection(
  key: string | undefined | null,
): CorporateDisclosureSection | undefined {
  return CORPORATE_DISCLOSURE_SECTIONS.find((s) => s.key === key);
}
