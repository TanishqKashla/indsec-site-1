/**
 * The sections of the /disclosures/investor-charter-complaints page, in display
 * order.
 *
 * Single source of truth shared by the Studio schema, the Studio structure, the
 * front-end page and the seed script, so they never drift apart. Intentionally
 * free of React / Sanity imports so every layer can consume it.
 */
export type InvestorCharterSection = {
  key: string;
  label: string;
  lead: string;
};

export const INVESTOR_CHARTER_SECTIONS: readonly InvestorCharterSection[] = [
  {
    key: "investor-charters",
    label: "Investor Charters",
    lead: "Rights, responsibilities and service standards across each of our SEBI-regulated activities.",
  },
  {
    key: "investor-complaints-data",
    label: "Investor Complaints Data",
    lead: "Monthly disclosure of investor complaints, as filed with the exchanges and SEBI.",
  },
];

export function getInvestorCharterSection(
  key: string | undefined | null,
): InvestorCharterSection | undefined {
  return INVESTOR_CHARTER_SECTIONS.find((s) => s.key === key);
}
