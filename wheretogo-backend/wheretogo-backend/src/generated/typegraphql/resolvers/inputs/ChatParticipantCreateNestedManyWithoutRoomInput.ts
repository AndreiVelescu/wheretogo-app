import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantCreateManyRoomInputEnvelope } from "../inputs/ChatParticipantCreateManyRoomInputEnvelope";
import { ChatParticipantCreateOrConnectWithoutRoomInput } from "../inputs/ChatParticipantCreateOrConnectWithoutRoomInput";
import { ChatParticipantCreateWithoutRoomInput } from "../inputs/ChatParticipantCreateWithoutRoomInput";
import { ChatParticipantWhereUniqueInput } from "../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.InputType("ChatParticipantCreateNestedManyWithoutRoomInput", {})
export class ChatParticipantCreateNestedManyWithoutRoomInput {
  @TypeGraphQL.Field(_type => [ChatParticipantCreateWithoutRoomInput], {
    nullable: true
  })
  create?: ChatParticipantCreateWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantCreateOrConnectWithoutRoomInput], {
    nullable: true
  })
  connectOrCreate?: ChatParticipantCreateOrConnectWithoutRoomInput[] | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantCreateManyRoomInputEnvelope, {
    nullable: true
  })
  createMany?: ChatParticipantCreateManyRoomInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ChatParticipantWhereUniqueInput], {
    nullable: true
  })
  connect?: ChatParticipantWhereUniqueInput[] | undefined;
}
