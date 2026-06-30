import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomCountMessagesArgs } from "./args/ChatRoomCountMessagesArgs";
import { ChatRoomCountParticipantsArgs } from "./args/ChatRoomCountParticipantsArgs";

@TypeGraphQL.ObjectType("ChatRoomCount", {
  simpleResolvers: true
})
export class ChatRoomCount {
  messages!: number;
  participants!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "messages",
    nullable: false
  })
  getMessages(@TypeGraphQL.Root() root: ChatRoomCount, @TypeGraphQL.Args() args: ChatRoomCountMessagesArgs): number {
    return root.messages;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "participants",
    nullable: false
  })
  getParticipants(@TypeGraphQL.Root() root: ChatRoomCount, @TypeGraphQL.Args() args: ChatRoomCountParticipantsArgs): number {
    return root.participants;
  }
}
