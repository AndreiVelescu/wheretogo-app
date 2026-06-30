import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportAvgAggregate } from "../outputs/PostReportAvgAggregate";
import { PostReportCountAggregate } from "../outputs/PostReportCountAggregate";
import { PostReportMaxAggregate } from "../outputs/PostReportMaxAggregate";
import { PostReportMinAggregate } from "../outputs/PostReportMinAggregate";
import { PostReportSumAggregate } from "../outputs/PostReportSumAggregate";
import { ReportReason } from "../../enums/ReportReason";
import { ReportStatus } from "../../enums/ReportStatus";

@TypeGraphQL.ObjectType("PostReportGroupBy", {
  simpleResolvers: true
})
export class PostReportGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  reporterId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  postId!: number;

  @TypeGraphQL.Field(_type => ReportReason, {
    nullable: false
  })
  reason!: "SPAM" | "INAPPROPRIATE" | "HARASSMENT" | "MISLEADING" | "COPYRIGHT" | "OTHER";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  details!: string | null;

  @TypeGraphQL.Field(_type => ReportStatus, {
    nullable: false
  })
  status!: "PENDING" | "REVIEWED" | "RESOLVED" | "DISMISSED";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  reviewedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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
