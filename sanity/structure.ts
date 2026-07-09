import type { StructureResolver } from "sanity/structure";

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
    ]);
