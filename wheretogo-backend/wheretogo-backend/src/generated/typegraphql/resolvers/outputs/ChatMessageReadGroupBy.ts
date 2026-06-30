import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageReadAvgAggregate } from "../outputs/ChatMessageReadAvgAggregate";
import { ChatMessageReadCountAggregate } from "../outputs/ChatMessageReadCountAggregate";
import { ChatMessageReadMaxAggregate } from "../outputs/ChatMessageReadMaxAggregate";
import { ChatMessageReadMinAggregate } from "../outputs/ChatMessageReadMinAggregate";
import { ChatMessageReadSumAggregate } from "../outputs/ChatMessageReadSumAggregate";

@TypeGraphQL.ObjectType("ChatMessageReadGroupBy", {
  simpleResolvers: true
})
export class ChatMessageReadGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  messageId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readAt!: Date;

  @TypeGraphQL.Field(_type => ChatMessageReadCountAggregate, {
    nullable: true
  })
  _count!: ChatMessageReadCountAggregate | null;

  @TypeGraphQL.Field(_type => ChatMessageReadAvgAggregate, {
    nullable: true
  })
  _avg!: ChatMessageReadAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChatMessageReadSumAggregate, {
    nullable: true
  })
  _sum!: ChatMessageReadSumAggregate | null;

  @TypeGraphQL.Field(_type => ChatMessageReadMinAggregate, {
    nullable: true
  })
  _min!: ChatMessageReadMinAggregate | null;

  @TypeGraphQL.Field(_type => ChatMessageReadMaxAggregate, {
    nullable: true
  })
  _max!: ChatMessageReadMaxAggregate | null;
}
