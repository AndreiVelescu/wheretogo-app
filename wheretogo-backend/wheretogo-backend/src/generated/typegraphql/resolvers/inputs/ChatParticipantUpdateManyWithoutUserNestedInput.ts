import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantCreateManyUserInputEnvelope } from "../inputs/ChatParticipantCreateManyUserInputEnvelope";
import { ChatParticipantCreateOrConnectWithoutUserInput } from "../inputs/ChatParticipantCreateOrConnectWithoutUserInput";
import { ChatParticipantCreateWithoutUserInput } from "../inputs/ChatParticipantCreateWithoutUserInput";
import { ChatParticipantScalarWhereInput } from "../inputs/ChatParticipantScalarWhereInput";
import { ChatParticipantUpdateManyWithWhereWithoutUserInput } from "../inputs/ChatParticipantUpdateManyWithWhereWithoutUserInput";
import { ChatParticipantUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ChatParticipantUpdateWithWhereUniqueWithoutUserInput";
import { ChatParticipantUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ChatParticipantUpsertWithWhereUniqueWithoutUserInput";
import { ChatParticipantWhereUniqueInput } from "../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.InputType("ChatParticipantUpdateManyWithoutUserNestedInput", {})
export class ChatParticipantUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [ChatParticipantCreateWithoutUserInput], {
    nullable: true
  })
  create?: ChatParticipantCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ChatParticipantCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ChatParticipantUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ChatParticipantCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantWhereUniqueInput], {
    nullable: true
  })
  set?: ChatParticipantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ChatParticipantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantWhereUniqueInput], {
    nullable: true
  })
  delete?: ChatParticipantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantWhereUniqueInput], {
    nullable: true
  })
  connect?: ChatParticipantWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ChatParticipantUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ChatParticipantUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ChatParticipantScalarWhereInput[] | undefined;
}
