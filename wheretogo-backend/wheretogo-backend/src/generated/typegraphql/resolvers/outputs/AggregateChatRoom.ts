import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoomAvgAggregate } from "../outputs/ChatRoomAvgAggregate";
import { ChatRoomCountAggregate } from "../outputs/ChatRoomCountAggregate";
import { ChatRoomMaxAggregate } from "../outputs/ChatRoomMaxAggregate";
import { ChatRoomMinAggregate } from "../outputs/ChatRoomMinAggregate";
import { ChatRoomSumAggregate } from "../outputs/ChatRoomSumAggregate";

@TypeGraphQL.ObjectType("AggregateChatRoom", {
  simpleResolvers: true
})
export class AggregateChatRoom {
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
