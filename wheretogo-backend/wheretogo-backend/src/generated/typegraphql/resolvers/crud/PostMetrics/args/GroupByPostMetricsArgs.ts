import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMetricsOrderByWithAggregationInput } from "../../../inputs/PostMetricsOrderByWithAggregationInput";
import { PostMetricsScalarWhereWithAggregatesInput } from "../../../inputs/PostMetricsScalarWhereWithAggregatesInput";
import { PostMetricsWhereInput } from "../../../inputs/PostMetricsWhereInput";
import { PostMetricsScalarFieldEnum } from "../../../../enums/PostMetricsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostMetricsArgs {
  @TypeGraphQL.Field(_type => PostMetricsWhereInput, {
    nullable: true
  })
  where?: PostMetricsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostMetricsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostMetricsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMetricsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"postId" | "views" | "clicks" | "impressions" | "engagementRate" | "updatedAt">;

  @TypeGraphQL.Field(_type => PostMetricsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostMetricsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
