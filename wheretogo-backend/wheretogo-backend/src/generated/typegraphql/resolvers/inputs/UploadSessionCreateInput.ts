import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutUploadSessionsInput } from "../inputs/UserCreateNestedOneWithoutUploadSessionsInput";
import { UploadStatus } from "../../enums/UploadStatus";

@TypeGraphQL.InputType("UploadSessionCreateInput", {})
export class UploadSessionCreateInput {
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
  size?: number | undefined;

  @TypeGraphQL.Field(_type => UploadStatus, {
    nullable: true
  })
  status?: "PENDING" | "UPLOADED" | "CONFIRMED" | "EXPIRED" | "FAILED" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  confirmedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expiresAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutUploadSessionsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutUploadSessionsInput;
}
