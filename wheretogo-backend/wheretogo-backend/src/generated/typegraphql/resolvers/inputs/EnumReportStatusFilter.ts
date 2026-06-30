import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumReportStatusFilter } from "../inputs/NestedEnumReportStatusFilter";
import { ReportStatus } from "../../enums/ReportStatus";

@TypeGraphQL.InputType("EnumReportStatusFilter", {})
export class EnumReportStatusFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumReportStatusFilter, {
    nullable: true
  })
  not?: NestedEnumReportStatusFilter | undefined;
}
