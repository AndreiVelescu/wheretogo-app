import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageUpdateWithoutRoomInput } from "../inputs/ChatMessageUpdateWithoutRoomInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageUpdateWithWhereUniqueWithoutRoomInput", {})
export class ChatMessageUpdateWithWhereUniqueWithoutRoomInput {
  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: false
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ChatMessageUpdateWithoutRoomInput, {
    nullable: false
  })
  data!: ChatMessageUpdateWithoutRoomInput;
}
