import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportWhereInput } from "../inputs/PostReportWhereInput";

@TypeGraphQL.InputType("PostReportListRelationFilter", {})
export class PostReportListRelationFilter {
  @TypeGraphQL.Field(_type => PostReportWhereInput, {
    nullable: true
  })
  every?: PostReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostReportWhereInput, {
    nullable: true
  })
  some?: PostReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostReportWhereInput, {
    nullable: true
  })
  none?: PostReportWhereInput | undefined;
}
