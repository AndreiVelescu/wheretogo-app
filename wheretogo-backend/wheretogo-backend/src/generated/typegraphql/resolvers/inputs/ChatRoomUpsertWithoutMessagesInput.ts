import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateWithoutMessagesInput } from "../inputs/ChatRoomCreateWithoutMessagesInput";
import { ChatRoomUpdateWithoutMessagesInput } from "../inputs/ChatRoomUpdateWithoutMessagesInput";
import { ChatRoomWhereInput } from "../inputs/ChatRoomWhereInput";

@TypeGraphQL.InputType("ChatRoomUpsertWithoutMessagesInput", {})
export class ChatRoomUpsertWithoutMessagesInput {
  @TypeGraphQL.Field(_type => ChatRoomUpdateWithoutMessagesInput, {
    nullable: false
  })
  update!: ChatRoomUpdateWithoutMessagesInput;

  @TypeGraphQL.Field(_type => ChatRoomCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: ChatRoomCreateWithoutMessagesInput;

  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  where?: ChatRoomWhereInput | undefined;
}
