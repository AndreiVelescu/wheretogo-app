import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadStatus } from "../../enums/UploadStatus";

@TypeGraphQL.ObjectType("UploadSessionMinAggregate", {
  simpleResolvers: true
})
export class UploadSessionMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  fileKey!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filename!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contentType!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  size!: number | null;

  @TypeGraphQL.Field(_type => UploadStatus, {
    nullable: true
  })
  status!: "PENDING" | "UPLOADED" | "CONFIRMED" | "EXPIRED" | "FAILED" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  confirmedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  expiresAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
