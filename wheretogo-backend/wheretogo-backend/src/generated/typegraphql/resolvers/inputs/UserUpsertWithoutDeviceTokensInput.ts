import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutDeviceTokensInput } from "../inputs/UserCreateWithoutDeviceTokensInput";
import { UserUpdateWithoutDeviceTokensInput } from "../inputs/UserUpdateWithoutDeviceTokensInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutDeviceTokensInput", {})
export class UserUpsertWithoutDeviceTokensInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutDeviceTokensInput, {
    nullable: false
  })
  update!: UserUpdateWithoutDeviceTokensInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutDeviceTokensInput, {
    nullable: false
  })
  create!: UserCreateWithoutDeviceTokensInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
