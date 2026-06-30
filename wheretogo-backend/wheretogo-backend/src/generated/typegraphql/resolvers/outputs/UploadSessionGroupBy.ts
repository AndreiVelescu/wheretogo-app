import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadSessionAvgAggregate } from "../outputs/UploadSessionAvgAggregate";
import { UploadSessionCountAggregate } from "../outputs/UploadSessionCountAggregate";
import { UploadSessionMaxAggregate } from "../outputs/UploadSessionMaxAggregate";
import { UploadSessionMinAggregate } from "../outputs/UploadSessionMinAggregate";
import { UploadSessionSumAggregate } from "../outputs/UploadSessionSumAggregate";
import { UploadStatus } from "../../enums/UploadStatus";

@TypeGraphQL.ObjectType("UploadSessionGroupBy", {
  simpleResolvers: true
})
export class UploadSessionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  fileKey!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  filename!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contentType!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  size!: number | null;

  @TypeGraphQL.Field(_type => UploadStatus, {
    nullable: false
  })
  status!: "PENDING" | "UPLOADED" | "CONFIRMED" | "EXPIRED" | "FAILED";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  confirmedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expiresAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => UploadSessionCountAggregate, {
    nullable: true
  })
  _count!: UploadSessionCountAggregate | null;

  @TypeGraphQL.Field(_type => UploadSessionAvgAggregate, {
    nullable: true
  })
  _avg!: UploadSessionAvgAggregate | null;

  @TypeGraphQL.Field(_type => UploadSessionSumAggregate, {
    nullable: true
  })
  _sum!: UploadSessionSumAggregate | null;

  @TypeGraphQL.Field(_type => UploadSessionMinAggregate, {
    nullable: true
  })
  _min!: UploadSessionMinAggregate | null;

  @TypeGraphQL.Field(_type => UploadSessionMaxAggregate, {
    nullable: true
  })
  _max!: UploadSessionMaxAggregate | null;
}
