import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnChatRoomTripArgs } from "./args/CreateManyAndReturnChatRoomTripArgs";
import { Trip } from "../../models/Trip";
import { ChatRoomType } from "../../enums/ChatRoomType";

@TypeGraphQL.ObjectType("CreateManyAndReturnChatRoom", {
  simpleResolvers: true
})
export class CreateManyAndReturnChatRoom {
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
  name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tripId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastMessageAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  trip!: Trip | null;

  @TypeGraphQL.Field(_type => Trip, {
    name: "trip",
    nullable: true
  })
  getTrip(@TypeGraphQL.Root() root: CreateManyAndReturnChatRoom, @TypeGraphQL.Args() args: CreateManyAndReturnChatRoomTripArgs): Trip | null {
    return root.trip;
  }
}
