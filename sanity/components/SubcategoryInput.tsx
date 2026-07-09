import { Select } from "@sanity/ui";
import { useCallback } from "react";
import { set, unset, useFormValue, type StringInputProps } from "sanity";

import { SUBCATEGORIES_BY_CATEGORY } from "../lib/reportTaxonomy";

/**
 * Series (subcategory) dropdown that only shows the series belonging to the
 * currently selected category. Reads the sibling `category` field off the form.
 */
export function SubcategoryInput(props: StringInputProps) {
  const { value, onChange, elementProps } = props;
  const category = useFormValue(["category"]) as string | undefined;
  const options = category ? SUBCATEGORIES_BY_CATEGORY[category] ?? [] : [];

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const next = event.currentTarget.value;
      onChange(next ? set(next) : unset());
    },
    [onChange],
  );

  return (
    <Select
      {...elementProps}
      value={value ?? ""}
      onChange={handleChange}
      disabled={!category}
    >
      <option value="">
        {category ? "Select a series…" : "Pick a category first"}
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </Select>
  );
}
