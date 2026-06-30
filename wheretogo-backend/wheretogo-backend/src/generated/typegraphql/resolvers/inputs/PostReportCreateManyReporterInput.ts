import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportReason } from "../../enums/ReportReason";
import { ReportStatus } from "../../enums/ReportStatus";

@TypeGraphQL.InputType("PostReportCreateManyReporterInput", {})
export class PostReportCreateManyReporterInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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
  details?: string | undefined;

  @TypeGraphQL.Field(_type => ReportStatus, {
    nullable: true
  })
  status?: "PENDING" | "REVIEWED" | "RESOLVED" | "DISMISSED" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  reviewedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
