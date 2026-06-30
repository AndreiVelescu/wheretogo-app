import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDeviceTokensInput } from "../inputs/UserCreateOrConnectWithoutDeviceTokensInput";
import { UserCreateWithoutDeviceTokensInput } from "../inputs/UserCreateWithoutDeviceTokensInput";
import { UserUpdateToOneWithWhereWithoutDeviceTokensInput } from "../inputs/UserUpdateToOneWithWhereWithoutDeviceTokensInput";
import { UserUpsertWithoutDeviceTokensInput } from "../inputs/UserUpsertWithoutDeviceTokensInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutDeviceTokensNestedInput", {})
export class UserUpdateOneRequiredWithoutDeviceTokensNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDeviceTokensInput, {
    nullable: true
  })
  create?: UserCreateWithoutDeviceTokensInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDeviceTokensInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDeviceTokensInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutDeviceTokensInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutDeviceTokensInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutDeviceTokensInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutDeviceTokensInput | undefined;
}
