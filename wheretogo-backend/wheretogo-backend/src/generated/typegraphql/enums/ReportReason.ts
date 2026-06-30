import * as TypeGraphQL from "type-graphql";

export enum ReportReason {
  SPAM = "SPAM",
  INAPPROPRIATE = "INAPPROPRIATE",
  HARASSMENT = "HARASSMENT",
  MISLEADING = "MISLEADING",
  COPYRIGHT = "COPYRIGHT",
  OTHER = "OTHER"
}
TypeGraphQL.registerEnumType(ReportReason, {
  name: "ReportReason",
  description: undefined,
});
