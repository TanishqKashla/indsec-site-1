import type { StructureResolver } from "sanity/structure";

import { CLIENT_REGISTRATION_SECTIONS } from "./lib/clientRegistrationSections";
import { CORPORATE_DISCLOSURE_SECTIONS } from "./lib/corporateDisclosureSections";
import { INVESTOR_CHARTER_SECTIONS } from "./lib/investorCharterSections";
import { CATEGORIES } from "./lib/reportTaxonomy";

/**
 * Studio content pane: one browsable folder per category. Opening a folder
 * lists just that category's reports (newest first), and "Create new" inside
 * it pre-fills the category via the `report-by-category` template.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Research Reports")
        .child(
          S.list()
            .title("Research Reports")
            .items(
              CATEGORIES.map((c) =>
                S.listItem()
                  .id(c.key)
                  .title(c.label)
                  .child(
                    S.documentList()
                      .title(c.label)
                      .schemaType("report")
                      .filter('_type == "report" && category == $category')
                      .params({ category: c.key })
                      .defaultOrdering([
                        { field: "publishedDate", direction: "desc" },
                      ])
                      .initialValueTemplates([
                        S.initialValueTemplateItem("report-by-category", {
                          category: c.key,
                        }),
                      ]),
                  ),
              ),
            ),
        ),
      S.listItem()
        .title("Disclosure Documents")
        .child(
          S.documentList()
            .title("Disclosure Documents")
            .schemaType("corporateDocument")
            .filter('_type == "corporateDocument"')
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Corporate Disclosure")
        .child(
          S.list()
            .title("Corporate Disclosure")
            .items(
              CORPORATE_DISCLOSURE_SECTIONS.map((s) =>
                S.listItem()
                  .id(s.key)
                  .title(s.label)
                  .child(
                    S.documentList()
                      .title(s.label)
                      .schemaType("corporateDisclosure")
                      .filter(
                        '_type == "corporateDisclosure" && section == $section',
                      )
                      .params({ section: s.key })
                      .defaultOrdering([{ field: "order", direction: "asc" }])
                      .initialValueTemplates([
                        S.initialValueTemplateItem(
                          "corporate-disclosure-by-section",
                          { section: s.key },
                        ),
                      ]),
                  ),
              ),
            ),
        ),
      S.listItem()
        .title("Investor Charters & Complaints")
        .child(
          S.list()
            .title("Investor Charters & Complaints")
            .items(
              INVESTOR_CHARTER_SECTIONS.map((s) =>
                S.listItem()
                  .id(s.key)
                  .title(s.label)
                  .child(
                    S.documentList()
                      .title(s.label)
                      .schemaType("investorCharterComplaint")
                      .filter(
                        '_type == "investorCharterComplaint" && section == $section',
                      )
                      .params({ section: s.key })
                      .defaultOrdering([{ field: "order", direction: "asc" }])
                      .initialValueTemplates([
                        S.initialValueTemplateItem(
                          "investor-charter-by-section",
                          { section: s.key },
                        ),
                      ]),
                  ),
              ),
            ),
        ),
      S.listItem()
        .title("Client Registration Documents")
        .child(
          S.list()
            .title("Client Registration Documents")
            .items(
              CLIENT_REGISTRATION_SECTIONS.map((s) =>
                S.listItem()
                  .id(s.key)
                  .title(s.label)
                  .child(
                    S.documentList()
                      .title(s.label)
                      .schemaType("clientRegistrationDoc")
                      .filter(
                        '_type == "clientRegistrationDoc" && section == $section',
                      )
                      .params({ section: s.key })
                      .defaultOrdering([{ field: "order", direction: "asc" }])
                      .initialValueTemplates([
                        S.initialValueTemplateItem(
                          "client-registration-by-section",
                          { section: s.key },
                        ),
                      ]),
                  ),
              ),
            ),
        ),
      S.listItem()
        .title("Bank Accounts")
        .child(
          S.documentList()
            .title("Bank Accounts")
            .schemaType("bankAccount")
            .filter('_type == "bankAccount"')
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Investor Awareness Videos")
        .child(
          S.documentList()
            .title("Investor Awareness Videos")
            .schemaType("videoSection")
            .filter('_type == "videoSection"')
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
    ]);
