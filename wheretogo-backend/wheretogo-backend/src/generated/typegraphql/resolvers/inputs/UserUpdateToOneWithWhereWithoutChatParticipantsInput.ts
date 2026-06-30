import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutChatParticipantsInput } from "../inputs/UserUpdateWithoutChatParticipantsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutChatParticipantsInput", {})
export class UserUpdateToOneWithWhereWithoutChatParticipantsInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutChatParticipantsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutChatParticipantsInput;
}
