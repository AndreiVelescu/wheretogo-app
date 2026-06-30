import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCreateOrConnectWithoutMessagesInput } from "../inputs/ChatRoomCreateOrConnectWithoutMessagesInput";
import { ChatRoomCreateWithoutMessagesInput } from "../inputs/ChatRoomCreateWithoutMessagesInput";
import { ChatRoomWhereUniqueInput } from "../inputs/ChatRoomWhereUniqueInput";

@TypeGraphQL.InputType("ChatRoomCreateNestedOneWithoutMessagesInput", {})
export class ChatRoomCreateNestedOneWithoutMessagesInput {
  @TypeGraphQL.Field(_type => ChatRoomCreateWithoutMessagesInput, {
    nullable: true
  })
  create?: ChatRoomCreateWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomCreateOrConnectWithoutMessagesInput, {
    nullable: true
  })
  connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ChatRoomWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatRoomWhereUniqueInput | undefined;
}
