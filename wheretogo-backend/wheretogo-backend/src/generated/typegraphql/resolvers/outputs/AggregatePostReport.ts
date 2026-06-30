import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportAvgAggregate } from "../outputs/PostReportAvgAggregate";
import { PostReportCountAggregate } from "../outputs/PostReportCountAggregate";
import { PostReportMaxAggregate } from "../outputs/PostReportMaxAggregate";
import { PostReportMinAggregate } from "../outputs/PostReportMinAggregate";
import { PostReportSumAggregate } from "../outputs/PostReportSumAggregate";

@TypeGraphQL.ObjectType("AggregatePostReport", {
  simpleResolvers: true
})
export class AggregatePostReport {
  @TypeGraphQL.Field(_type => PostReportCountAggregate, {
    nullable: true
  })
  _count!: PostReportCountAggregate | null;

  @TypeGraphQL.Field(_type => PostReportAvgAggregate, {
    nullable: true
  })
  _avg!: PostReportAvgAggregate | null;

  @TypeGraphQL.Field(_type => PostReportSumAggregate, {
    nullable: true
  })
  _sum!: PostReportSumAggregate | null;

  @TypeGraphQL.Field(_type => PostReportMinAggregate, {
    nullable: true
  })
  _min!: PostReportMinAggregate | null;

  @TypeGraphQL.Field(_type => PostReportMaxAggregate, {
    nullable: true
  })
  _max!: PostReportMaxAggregate | null;
}
