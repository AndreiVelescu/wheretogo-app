import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutChatParticipantsInput } from "../inputs/UserCreateOrConnectWithoutChatParticipantsInput";
import { UserCreateWithoutChatParticipantsInput } from "../inputs/UserCreateWithoutChatParticipantsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutChatParticipantsInput", {})
export class UserCreateNestedOneWithoutChatParticipantsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutChatParticipantsInput, {
    nullable: true
  })
  create?: UserCreateWithoutChatParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutChatParticipantsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutChatParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
