/**
 * The sections of the /disclosures/client-registration-document page, in display
 * order.
 *
 * Single source of truth shared by the Studio schema, the Studio structure, the
 * front-end page and the seed script, so they never drift apart. Intentionally
 * free of React / Sanity imports so every layer can consume it.
 */
export type ClientRegistrationSection = {
  key: string;
  label: string;
  lead?: string;
};

export const CLIENT_REGISTRATION_SECTIONS: readonly ClientRegistrationSection[] =
  [
    { key: "broking-account-opening", label: "Broking — Account Opening" },
    {
      key: "dp-account-opening",
      label: "Depository (DP) — Account Opening",
    },
    { key: "kyc-updation", label: "KYC Updation" },
    { key: "nomination", label: "Nomination" },
    { key: "additional-resources", label: "Additional Resources" },
  ];

export function getClientRegistrationSection(
  key: string | undefined | null,
): ClientRegistrationSection | undefined {
  return CLIENT_REGISTRATION_SECTIONS.find((s) => s.key === key);
}

/** How each document is presented: an inline PDF, a ZIP download, or an
 *  external page link. */
export const CLIENT_REGISTRATION_KINDS = ["PDF", "ZIP", "Page"] as const;
export type ClientRegistrationKind = (typeof CLIENT_REGISTRATION_KINDS)[number];
