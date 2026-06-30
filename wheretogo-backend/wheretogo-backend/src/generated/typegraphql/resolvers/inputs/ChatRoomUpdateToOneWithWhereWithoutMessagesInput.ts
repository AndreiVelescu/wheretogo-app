import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomUpdateWithoutMessagesInput } from "../inputs/ChatRoomUpdateWithoutMessagesInput";
import { ChatRoomWhereInput } from "../inputs/ChatRoomWhereInput";

@TypeGraphQL.InputType("ChatRoomUpdateToOneWithWhereWithoutMessagesInput", {})
export class ChatRoomUpdateToOneWithWhereWithoutMessagesInput {
  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  where?: ChatRoomWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomUpdateWithoutMessagesInput, {
    nullable: false
  })
  data!: ChatRoomUpdateWithoutMessagesInput;
}
