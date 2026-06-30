import * as TypeGraphQL from "type-graphql";

export enum ReportStatus {
  PENDING = "PENDING",
  REVIEWED = "REVIEWED",
  RESOLVED = "RESOLVED",
  DISMISSED = "DISMISSED"
}
TypeGraphQL.registerEnumType(ReportStatus, {
  name: "ReportStatus",
  description: undefined,
});
