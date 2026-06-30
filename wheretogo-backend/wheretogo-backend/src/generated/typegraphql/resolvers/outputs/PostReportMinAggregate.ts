import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportReason } from "../../enums/ReportReason";
import { ReportStatus } from "../../enums/ReportStatus";

@TypeGraphQL.ObjectType("PostReportMinAggregate", {
  simpleResolvers: true
})
export class PostReportMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  reporterId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  postId!: number | null;

  @TypeGraphQL.Field(_type => ReportReason, {
    nullable: true
  })
  reason!: "SPAM" | "INAPPROPRIATE" | "HARASSMENT" | "MISLEADING" | "COPYRIGHT" | "OTHER" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  details!: string | null;

  @TypeGraphQL.Field(_type => ReportStatus, {
    nullable: true
  })
  status!: "PENDING" | "REVIEWED" | "RESOLVED" | "DISMISSED" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  reviewedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
