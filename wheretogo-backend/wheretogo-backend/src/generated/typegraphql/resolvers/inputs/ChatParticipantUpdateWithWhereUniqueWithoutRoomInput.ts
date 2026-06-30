import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantUpdateWithoutRoomInput } from "../inputs/ChatParticipantUpdateWithoutRoomInput";
import { ChatParticipantWhereUniqueInput } from "../inputs/ChatParticipantWhereUniqueInput";

@TypeGraphQL.InputType("ChatParticipantUpdateWithWhereUniqueWithoutRoomInput", {})
export class ChatParticipantUpdateWithWhereUniqueWithoutRoomInput {
  @TypeGraphQL.Field(_type => ChatParticipantWhereUniqueInput, {
    nullable: false
  })
  where!: ChatParticipantWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatParticipantUpdateWithoutRoomInput, {
    nullable: false
  })
  data!: ChatParticipantUpdateWithoutRoomInput;
}
