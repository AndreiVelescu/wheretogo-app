import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportReason } from "../../enums/ReportReason";

@TypeGraphQL.InputType("NestedEnumReportReasonFilter", {})
export class NestedEnumReportReasonFilter {
  @TypeGraphQL.Field(_type => ReportReason, {
    nullable: true
  })
  equals?: "SPAM" | "INAPPROPRIATE" | "HARASSMENT" | "MISLEADING" | "COPYRIGHT" | "OTHER" | undefined;

  @TypeGraphQL.Field(_type => [ReportReason], {
    nullable: true
  })
  in?: Array<"SPAM" | "INAPPROPRIATE" | "HARASSMENT" | "MISLEADING" | "COPYRIGHT" | "OTHER"> | undefined;

  @TypeGraphQL.Field(_type => [ReportReason], {
    nullable: true
  })
  notIn?: Array<"SPAM" | "INAPPROPRIATE" | "HARASSMENT" | "MISLEADING" | "COPYRIGHT" | "OTHER"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReportReasonFilter, {
    nullable: true
  })
  not?: NestedEnumReportReasonFilter | undefined;
}
