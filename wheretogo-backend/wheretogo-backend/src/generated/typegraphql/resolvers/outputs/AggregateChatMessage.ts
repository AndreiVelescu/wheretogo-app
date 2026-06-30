import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageAvgAggregate } from "../outputs/ChatMessageAvgAggregate";
import { ChatMessageCountAggregate } from "../outputs/ChatMessageCountAggregate";
import { ChatMessageMaxAggregate } from "../outputs/ChatMessageMaxAggregate";
import { ChatMessageMinAggregate } from "../outputs/ChatMessageMinAggregate";
import { ChatMessageSumAggregate } from "../outputs/ChatMessageSumAggregate";

@TypeGraphQL.ObjectType("AggregateChatMessage", {
  simpleResolvers: true
})
export class AggregateChatMessage {
  @TypeGraphQL.Field(_type => ChatMessageCountAggregate, {
    nullable: true
  })
  _count!: ChatMessageCountAggregate | null;

  @TypeGraphQL.Field(_type => ChatMessageAvgAggregate, {
    nullable: true
  })
  _avg!: ChatMessageAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChatMessageSumAggregate, {
    nullable: true
  })
  _sum!: ChatMessageSumAggregate | null;

  @TypeGraphQL.Field(_type => ChatMessageMinAggregate, {
    nullable: true
  })
  _min!: ChatMessageMinAggregate | null;

  @TypeGraphQL.Field(_type => ChatMessageMaxAggregate, {
    nullable: true
  })
  _max!: ChatMessageMaxAggregate | null;
}
