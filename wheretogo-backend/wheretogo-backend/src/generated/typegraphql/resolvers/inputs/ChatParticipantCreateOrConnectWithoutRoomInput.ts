import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantCreateWithoutRoomInput } from "../inputs/ChatParticipantCreateWithoutRoomInput";
import { ChatParticipantWhereUniqueInput } from "../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.InputType("ChatParticipantCreateOrConnectWithoutRoomInput", {})
export class ChatParticipantCreateOrConnectWithoutRoomInput {
  @TypeGraphQL.Field(_type => ChatParticipantWhereUniqueInput, {
    nullable: false
  })
  where!: ChatParticipantWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatParticipantCreateWithoutRoomInput, {
    nullable: false
  })
  create!: ChatParticipantCreateWithoutRoomInput;
}
