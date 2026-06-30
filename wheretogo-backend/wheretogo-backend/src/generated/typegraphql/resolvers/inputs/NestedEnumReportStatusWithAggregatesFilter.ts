import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumReportStatusFilter } from "../inputs/NestedEnumReportStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ReportStatus } from "../../enums/ReportStatus";

@TypeGraphQL.InputType("NestedEnumReportStatusWithAggregatesFilter", {})
export class NestedEnumReportStatusWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ReportStatus, {
    nullable: true
  })
  equals?: "PENDING" | "REVIEWED" | "RESOLVED" | "DISMISSED" | undefined;

  @TypeGraphQL.Field(_type => [ReportStatus], {
    nullable: true
  })
  in?: Array<"PENDING" | "REVIEWED" | "RESOLVED" | "DISMISSED"> | undefined;

  @TypeGraphQL.Field(_type => [ReportStatus], {
    nullable: true
  })
  notIn?: Array<"PENDING" | "REVIEWED" | "RESOLVED" | "DISMISSED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReportStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumReportStatusWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReportStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumReportStatusFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReportStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumReportStatusFilter | undefined;
}
