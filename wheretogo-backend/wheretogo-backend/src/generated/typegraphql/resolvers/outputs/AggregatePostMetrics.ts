import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMetricsAvgAggregate } from "../outputs/PostMetricsAvgAggregate";
import { PostMetricsCountAggregate } from "../outputs/PostMetricsCountAggregate";
import { PostMetricsMaxAggregate } from "../outputs/PostMetricsMaxAggregate";
import { PostMetricsMinAggregate } from "../outputs/PostMetricsMinAggregate";
import { PostMetricsSumAggregate } from "../outputs/PostMetricsSumAggregate";

@TypeGraphQL.ObjectType("AggregatePostMetrics", {
  simpleResolvers: true
})
export class AggregatePostMetrics {
  @TypeGraphQL.Field(_type => PostMetricsCountAggregate, {
    nullable: true
  })
  _count!: PostMetricsCountAggregate | null;

  @TypeGraphQL.Field(_type => PostMetricsAvgAggregate, {
    nullable: true
  })
  _avg!: PostMetricsAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostMetricsSumAggregate, {
    nullable: true
  })
  _sum!: PostMetricsSumAggregate | null;

  @TypeGraphQL.Field(_type => PostMetricsMinAggregate, {
    nullable: true
  })
  _min!: PostMetricsMinAggregate | null;

  @TypeGraphQL.Field(_type => PostMetricsMaxAggregate, {
    nullable: true
  })
  _max!: PostMetricsMaxAggregate | null;
}
