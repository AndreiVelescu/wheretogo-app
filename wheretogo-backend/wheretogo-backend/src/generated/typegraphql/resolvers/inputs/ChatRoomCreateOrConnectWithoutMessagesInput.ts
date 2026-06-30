import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateWithoutMessagesInput } from "../inputs/ChatRoomCreateWithoutMessagesInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.InputType("ChatRoomCreateOrConnectWithoutMessagesInput", {})
export class ChatRoomCreateOrConnectWithoutMessagesInput {
  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: false
  })
  where!: ChatRoomWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatRoomCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: ChatRoomCreateWithoutMessagesInput;
}
