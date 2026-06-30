import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomAvgAggregate } from "../outputs/ChatRoomAvgAggregate";
import { ChatRoomCountAggregate } from "../outputs/ChatRoomCountAggregate";
import { ChatRoomMaxAggregate } from "../outputs/ChatRoomMaxAggregate";
import { ChatRoomMinAggregate } from "../outputs/ChatRoomMinAggregate";
import { ChatRoomSumAggregate } from "../outputs/ChatRoomSumAggregate";
import { ChatRoomType } from "../../enums/ChatRoomType";

@TypeGraphQL.ObjectType("ChatRoomGroupBy", {
  simpleResolvers: true
})
export class ChatRoomGroupBy {
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

  @TypeGraphQL.Field(_type => ChatRoomCountAggregate, {
    nullable: true
  })
  _count!: ChatRoomCountAggregate | null;

  @TypeGraphQL.Field(_type => ChatRoomAvgAggregate, {
    nullable: true
  })
  _avg!: ChatRoomAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChatRoomSumAggregate, {
    nullable: true
  })
  _sum!: ChatRoomSumAggregate | null;

  @TypeGraphQL.Field(_type => ChatRoomMinAggregate, {
    nullable: true
  })
  _min!: ChatRoomMinAggregate | null;

  @TypeGraphQL.Field(_type => ChatRoomMaxAggregate, {
    nullable: true
  })
  _max!: ChatRoomMaxAggregate | null;
}
