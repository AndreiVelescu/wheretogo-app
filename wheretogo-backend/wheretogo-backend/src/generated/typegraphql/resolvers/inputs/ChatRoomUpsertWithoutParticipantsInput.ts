import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateWithoutParticipantsInput } from "../inputs/ChatRoomCreateWithoutParticipantsInput";
import { ChatRoomUpdateWithoutParticipantsInput } from "../inputs/ChatRoomUpdateWithoutParticipantsInput";
import { ChatRoomWhereInput } from "../inputs/ChatRoomWhereInput";

@TypeGraphQL.InputType("ChatRoomUpsertWithoutParticipantsInput", {})
export class ChatRoomUpsertWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => ChatRoomUpdateWithoutParticipantsInput, {
    nullable: false
  })
  update!: ChatRoomUpdateWithoutParticipantsInput;

  @TypeGraphQL.Field(_type => ChatRoomCreateWithoutParticipantsInput, {
    nullable: false
  })
  create!: ChatRoomCreateWithoutParticipantsInput;

  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  where?: ChatRoomWhereInput | undefined;
}
