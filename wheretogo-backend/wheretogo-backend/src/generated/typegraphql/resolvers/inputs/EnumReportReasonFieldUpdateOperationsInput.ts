import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportReason } from "../../enums/ReportReason";

@TypeGraphQL.InputType("EnumReportReasonFieldUpdateOperationsInput", {})
export class EnumReportReasonFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ReportReason, {
    nullable: true
  })
  set?: "SPAM" | "INAPPROPRIATE" | "HARASSMENT" | "MISLEADING" | "COPYRIGHT" | "OTHER" | undefined;
}
