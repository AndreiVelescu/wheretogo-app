import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomUpdateWithoutParticipantsInput } from "../inputs/ChatRoomUpdateWithoutParticipantsInput";
import { ChatRoomWhereInput } from "../inputs/ChatRoomWhereInput";

@TypeGraphQL.InputType("ChatRoomUpdateToOneWithWhereWithoutParticipantsInput", {})
export class ChatRoomUpdateToOneWithWhereWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  where?: ChatRoomWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomUpdateWithoutParticipantsInput, {
    nullable: false
  })
  data!: ChatRoomUpdateWithoutParticipantsInput;
}
