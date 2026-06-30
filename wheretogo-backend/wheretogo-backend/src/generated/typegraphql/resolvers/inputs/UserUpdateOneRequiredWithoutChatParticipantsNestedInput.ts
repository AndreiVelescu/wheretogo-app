import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutChatParticipantsInput } from "../inputs/UserCreateOrConnectWithoutChatParticipantsInput";
import { UserCreateWithoutChatParticipantsInput } from "../inputs/UserCreateWithoutChatParticipantsInput";
import { UserUpdateToOneWithWhereWithoutChatParticipantsInput } from "../inputs/UserUpdateToOneWithWhereWithoutChatParticipantsInput";
import { UserUpsertWithoutChatParticipantsInput } from "../inputs/UserUpsertWithoutChatParticipantsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutChatParticipantsNestedInput", {})
export class UserUpdateOneRequiredWithoutChatParticipantsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutChatParticipantsInput, {
    nullable: true
  })
  create?: UserCreateWithoutChatParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutChatParticipantsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutChatParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutChatParticipantsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutChatParticipantsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutChatParticipantsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutChatParticipantsInput | undefined;
}
