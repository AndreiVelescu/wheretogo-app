import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ChatMessage } from "../models/ChatMessage";
import { ChatParticipant } from "../models/ChatParticipant";
import { Trip } from "../models/Trip";
import { ChatRoomType } from "../enums/ChatRoomType";
import { ChatRoomCount } from "../resolvers/outputs/ChatRoomCount";

@TypeGraphQL.ObjectType("ChatRoom", {
  simpleResolvers: true
})
export class ChatRoom {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => ChatRoomType, {
    nullable: false
  })
  type!: "TRIP" | "DIRECT" | "GROUP";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tripId?: number | null;

  trip?: Trip | null;

  messages?: ChatMessage[];

  participants?: ChatParticipant[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastMessageAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => ChatRoomCount, {
    nullable: true
  })
  _count?: ChatRoomCount | null;
}
