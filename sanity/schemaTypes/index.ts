import type { SchemaTypeDefinition } from "sanity";

import { bankAccountType } from "./bankAccount";
import { clientRegistrationDocType } from "./clientRegistrationDoc";
import { corporateDisclosureType } from "./corporateDisclosure";
import { corporateDocumentType } from "./corporateDocument";
import { investorCharterComplaintType } from "./investorCharterComplaint";
import { reportType } from "./reportType";
import { videoSectionType } from "./videoSection";

export const schemaTypes: SchemaTypeDefinition[] = [
  reportType,
  corporateDocumentType,
  corporateDisclosureType,
  investorCharterComplaintType,
  clientRegistrationDocType,
  bankAccountType,
  videoSectionType,
];
