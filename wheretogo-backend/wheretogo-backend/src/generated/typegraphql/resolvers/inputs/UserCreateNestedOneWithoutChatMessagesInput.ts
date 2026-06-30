import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutChatMessagesInput } from "../inputs/UserCreateOrConnectWithoutChatMessagesInput";
import { UserCreateWithoutChatMessagesInput } from "../inputs/UserCreateWithoutChatMessagesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutChatMessagesInput", {})
export class UserCreateNestedOneWithoutChatMessagesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutChatMessagesInput, {
    nullable: true
  })
  create?: UserCreateWithoutChatMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutChatMessagesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutChatMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
