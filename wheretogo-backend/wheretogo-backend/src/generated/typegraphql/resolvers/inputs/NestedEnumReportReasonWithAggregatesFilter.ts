import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumReportReasonFilter } from "../inputs/NestedEnumReportReasonFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ReportReason } from "../../enums/ReportReason";

@TypeGraphQL.InputType("NestedEnumReportReasonWithAggregatesFilter", {})
export class NestedEnumReportReasonWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumReportReasonWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumReportReasonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReportReasonFilter, {
    nullable: true
  })
  _min?: NestedEnumReportReasonFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReportReasonFilter, {
    nullable: true
  })
  _max?: NestedEnumReportReasonFilter | undefined;
}
