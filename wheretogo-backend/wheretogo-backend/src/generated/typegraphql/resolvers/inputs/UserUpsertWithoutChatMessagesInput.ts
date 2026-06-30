import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutChatMessagesInput } from "../inputs/UserCreateWithoutChatMessagesInput";
import { UserUpdateWithoutChatMessagesInput } from "../inputs/UserUpdateWithoutChatMessagesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutChatMessagesInput", {})
export class UserUpsertWithoutChatMessagesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutChatMessagesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutChatMessagesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutChatMessagesInput, {
    nullable: false
  })
  create!: UserCreateWithoutChatMessagesInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
