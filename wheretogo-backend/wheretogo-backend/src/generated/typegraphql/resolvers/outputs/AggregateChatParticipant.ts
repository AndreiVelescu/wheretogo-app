import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantAvgAggregate } from "../outputs/ChatParticipantAvgAggregate";
import { ChatParticipantCountAggregate } from "../outputs/ChatParticipantCountAggregate";
import { ChatParticipantMaxAggregate } from "../outputs/ChatParticipantMaxAggregate";
import { ChatParticipantMinAggregate } from "../outputs/ChatParticipantMinAggregate";
import { ChatParticipantSumAggregate } from "../outputs/ChatParticipantSumAggregate";

@TypeGraphQL.ObjectType("AggregateChatParticipant", {
  simpleResolvers: true
})
export class AggregateChatParticipant {
  @TypeGraphQL.Field(_type => ChatParticipantCountAggregate, {
    nullable: true
  })
  _count!: ChatParticipantCountAggregate | null;

  @TypeGraphQL.Field(_type => ChatParticipantAvgAggregate, {
    nullable: true
  })
  _avg!: ChatParticipantAvgAggregate | null;

  @TypeGraphQL.Field(_type => ChatParticipantSumAggregate, {
    nullable: true
  })
  _sum!: ChatParticipantSumAggregate | null;

  @TypeGraphQL.Field(_type => ChatParticipantMinAggregate, {
    nullable: true
  })
  _min!: ChatParticipantMinAggregate | null;

  @TypeGraphQL.Field(_type => ChatParticipantMaxAggregate, {
    nullable: true
  })
  _max!: ChatParticipantMaxAggregate | null;
}
