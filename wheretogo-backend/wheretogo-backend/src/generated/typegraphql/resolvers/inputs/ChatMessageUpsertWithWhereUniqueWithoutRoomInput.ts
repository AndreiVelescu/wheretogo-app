import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateWithoutRoomInput } from "../inputs/ChatMessageCreateWithoutRoomInput";
import { ChatMessageUpdateWithoutRoomInput } from "../inputs/ChatMessageUpdateWithoutRoomInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageUpsertWithWhereUniqueWithoutRoomInput", {})
export class ChatMessageUpsertWithWhereUniqueWithoutRoomInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageUpdateWithoutRoomInput, {
    nullable: false
  })
  update!: ChatMessageUpdateWithoutRoomInput;

  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutRoomInput, {
    nullable: false
  })
  create!: ChatMessageCreateWithoutRoomInput;
}
