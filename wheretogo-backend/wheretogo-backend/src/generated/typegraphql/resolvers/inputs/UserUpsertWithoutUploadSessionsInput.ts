import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutUploadSessionsInput } from "../inputs/UserCreateWithoutUploadSessionsInput";
import { UserUpdateWithoutUploadSessionsInput } from "../inputs/UserUpdateWithoutUploadSessionsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutUploadSessionsInput", {})
export class UserUpsertWithoutUploadSessionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutUploadSessionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutUploadSessionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutUploadSessionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutUploadSessionsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
