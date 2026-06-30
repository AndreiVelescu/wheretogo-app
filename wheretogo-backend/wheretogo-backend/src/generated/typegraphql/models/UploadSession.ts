import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { UploadStatus } from "../enums/UploadStatus";

@TypeGraphQL.ObjectType("UploadSession", {
  simpleResolvers: true
})
export class UploadSession {
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
  size?: number | null;

  @TypeGraphQL.Field(_type => UploadStatus, {
    nullable: false
  })
  status!: "PENDING" | "UPLOADED" | "CONFIRMED" | "EXPIRED" | "FAILED";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  confirmedAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expiresAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  user?: User;
}
