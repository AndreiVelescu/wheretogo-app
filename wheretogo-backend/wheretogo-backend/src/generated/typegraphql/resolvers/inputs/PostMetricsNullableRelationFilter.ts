import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMetricsWhereInput } from "../inputs/PostMetricsWhereInput";

@TypeGraphQL.InputType("PostMetricsNullableRelationFilter", {})
export class PostMetricsNullableRelationFilter {
  @TypeGraphQL.Field(_type => PostMetricsWhereInput, {
    nullable: true
  })
  is?: PostMetricsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsWhereInput, {
    nullable: true
  })
  isNot?: PostMetricsWhereInput | undefined;
}
