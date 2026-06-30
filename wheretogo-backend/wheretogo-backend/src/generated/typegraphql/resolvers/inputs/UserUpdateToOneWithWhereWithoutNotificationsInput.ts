import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutNotificationsInput } from "../inputs/UserUpdateWithoutNotificationsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutNotificationsInput", {})
export class UserUpdateToOneWithWhereWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutNotificationsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutNotificationsInput;
}
