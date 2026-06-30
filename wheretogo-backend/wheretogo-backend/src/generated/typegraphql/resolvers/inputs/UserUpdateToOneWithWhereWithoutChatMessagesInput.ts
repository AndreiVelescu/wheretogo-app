import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutChatMessagesInput } from "../inputs/UserUpdateWithoutChatMessagesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutChatMessagesInput", {})
export class UserUpdateToOneWithWhereWithoutChatMessagesInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutChatMessagesInput, {
    nullable: false
  })
  data!: UserUpdateWithoutChatMessagesInput;
}
