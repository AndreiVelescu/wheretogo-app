import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantCreateManyRoomInputEnvelope } from "../inputs/ChatParticipantCreateManyRoomInputEnvelope";
import { ChatParticipantCreateOrConnectWithoutRoomInput } from "../inputs/ChatParticipantCreateOrConnectWithoutRoomInput";
import { ChatParticipantCreateWithoutRoomInput } from "../inputs/ChatParticipantCreateWithoutRoomInput";
import { ChatParticipantScalarWhereInput } from "../inputs/ChatParticipantScalarWhereInput";
import { ChatParticipantUpdateManyWithWhereWithoutRoomInput } from "../inputs/ChatParticipantUpdateManyWithWhereWithoutRoomInput";
import { ChatParticipantUpdateWithWhereUniqueWithoutRoomInput } from "../inputs/ChatParticipantUpdateWithWhereUniqueWithoutRoomInput";
import { ChatParticipantUpsertWithWhereUniqueWithoutRoomInput } from "../inputs/ChatParticipantUpsertWithWhereUniqueWithoutRoomInput";
import { ChatParticipantWhereUniqueInput } from "../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.InputType("ChatParticipantUpdateManyWithoutRoomNestedInput", {})
export class ChatParticipantUpdateManyWithoutRoomNestedInput {
  @TypeGraphQL.Field(_type => [ChatParticipantCreateWithoutRoomInput], {
    nullable: true
  })
  create?: ChatParticipantCreateWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantCreateOrConnectWithoutRoomInput], {
    nullable: true
  })
  connectOrCreate?: ChatParticipantCreateOrConnectWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantUpsertWithWhereUniqueWithoutRoomInput], {
    nullable: true
  })
  upsert?: ChatParticipantUpsertWithWhereUniqueWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantCreateManyRoomInputEnvelope, {
    nullable: true
  })
  createMany?: ChatParticipantCreateManyRoomInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ChatParticipantUpdateWithWhereUniqueWithoutRoomInput], {
    nullable: true
  })
  update?: ChatParticipantUpdateWithWhereUniqueWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantUpdateManyWithWhereWithoutRoomInput], {
    nullable: true
  })
  updateMany?: ChatParticipantUpdateManyWithWhereWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ChatParticipantScalarWhereInput[] | undefined;
}
