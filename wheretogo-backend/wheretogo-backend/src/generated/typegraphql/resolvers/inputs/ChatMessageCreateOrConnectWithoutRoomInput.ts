import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateWithoutRoomInput } from "../inputs/ChatMessageCreateWithoutRoomInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageCreateOrConnectWithoutRoomInput", {})
export class ChatMessageCreateOrConnectWithoutRoomInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutRoomInput, {
    nullable: false
  })
  create!: ChatMessageCreateWithoutRoomInput;
}
