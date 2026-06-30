import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Post } from "../../models/Post";
import { User } from "../../models/User";
import { ReportReason } from "../../enums/ReportReason";
import { ReportStatus } from "../../enums/ReportStatus";

@TypeGraphQL.ObjectType("CreateManyAndReturnPostReport", {
  simpleResolvers: true
})
export class CreateManyAndReturnPostReport {
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

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  reporter!: User;

  @TypeGraphQL.Field(_type => Post, {
    nullable: false
  })
  post!: Post;
}
