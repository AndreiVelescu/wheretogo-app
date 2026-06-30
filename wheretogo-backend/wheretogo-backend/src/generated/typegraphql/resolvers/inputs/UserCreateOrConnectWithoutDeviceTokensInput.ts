import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutDeviceTokensInput } from "../inputs/UserCreateWithoutDeviceTokensInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutDeviceTokensInput", {})
export class UserCreateOrConnectWithoutDeviceTokensInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutDeviceTokensInput, {
    nullable: false
  })
  create!: UserCreateWithoutDeviceTokensInput;
}
