import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostMetricsWhereInput } from "../inputs/PostMetricsWhereInput";
import { PostRelationFilter } from "../inputs/PostRelationFilter";

@TypeGraphQL.InputType("PostMetricsWhereUniqueInput", {})
export class PostMetricsWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  postId?: number | undefined;

  @TypeGraphQL.Field(_type => [PostMetricsWhereInput], {
    nullable: true
  })
  AND?: PostMetricsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMetricsWhereInput], {
    nullable: true
  })
  OR?: PostMetricsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMetricsWhereInput], {
    nullable: true
  })
  NOT?: PostMetricsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  views?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  clicks?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  impressions?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  engagementRate?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => PostRelationFilter, {
    nullable: true
  })
  post?: PostRelationFilter | undefined;
}
