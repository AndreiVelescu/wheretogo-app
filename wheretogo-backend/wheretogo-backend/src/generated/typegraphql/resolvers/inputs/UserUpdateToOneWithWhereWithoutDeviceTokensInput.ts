import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutDeviceTokensInput } from "../inputs/UserUpdateWithoutDeviceTokensInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutDeviceTokensInput", {})
export class UserUpdateToOneWithWhereWithoutDeviceTokensInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutDeviceTokensInput, {
    nullable: false
  })
  data!: UserUpdateWithoutDeviceTokensInput;
}
