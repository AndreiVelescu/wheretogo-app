import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateWithoutParticipantsInput } from "../inputs/ChatRoomCreateWithoutParticipantsInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.InputType("ChatRoomCreateOrConnectWithoutParticipantsInput", {})
export class ChatRoomCreateOrConnectWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: false
  })
  where!: ChatRoomWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatRoomCreateWithoutParticipantsInput, {
    nullable: false
  })
  create!: ChatRoomCreateWithoutParticipantsInput;
}
