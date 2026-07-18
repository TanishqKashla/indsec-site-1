/**
 * Bank Accounts data layer.
 *
 * The USCNBA account cards on the /disclosures/client-bank-account page are
 * managed by the client in the Sanity Studio at /studio and read here via GROQ.
 * Adding or editing a `bankAccount` in the Studio updates the site automatically.
 */
import { client } from "@/sanity/lib/client";

export type BankAccount = {
  _id: string;
  bankName: string;
  branch: string;
  accountNumber: string;
  ifsc: string;
  label: string; // the pill above the bank name, e.g. "USCNBA Account"
};

const BANK_ACCOUNT_PROJECTION = /* groq */ `{
  _id,
  bankName,
  branch,
  accountNumber,
  ifsc,
  label
}`;

type RawBankAccount = {
  _id: string;
  bankName?: string | null;
  branch?: string | null;
  accountNumber?: string | null;
  ifsc?: string | null;
  label?: string | null;
};

// Revalidate at most once a minute so Studio edits appear without a redeploy.
const FETCH_OPTIONS = { next: { revalidate: 60 } } as const;

export async function getBankAccounts(): Promise<BankAccount[]> {
  const query = /* groq */ `*[_type == "bankAccount" && defined(accountNumber)]
    | order(coalesce(order, 9999) asc, bankName asc) ${BANK_ACCOUNT_PROJECTION}`;
  const raw = await client.fetch<RawBankAccount[]>(query, {}, FETCH_OPTIONS);
  return raw.map((r) => ({
    _id: r._id,
    bankName: r.bankName ?? "",
    branch: r.branch ?? "",
    accountNumber: r.accountNumber ?? "",
    ifsc: r.ifsc ?? "",
    label: r.label?.trim() || "USCNBA Account",
  }));
}
