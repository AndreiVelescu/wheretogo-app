import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutChatParticipantsInput } from "../inputs/UserCreateWithoutChatParticipantsInput";
import { UserUpdateWithoutChatParticipantsInput } from "../inputs/UserUpdateWithoutChatParticipantsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutChatParticipantsInput", {})
export class UserUpsertWithoutChatParticipantsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutChatParticipantsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutChatParticipantsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutChatParticipantsInput, {
    nullable: false
  })
  create!: UserCreateWithoutChatParticipantsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
