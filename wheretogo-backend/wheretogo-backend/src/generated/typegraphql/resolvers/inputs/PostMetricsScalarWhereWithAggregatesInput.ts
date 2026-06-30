import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("PostMetricsScalarWhereWithAggregatesInput", {})
export class PostMetricsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [PostMetricsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: PostMetricsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMetricsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: PostMetricsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMetricsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: PostMetricsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  postId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  views?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  clicks?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  impressions?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  engagementRate?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
