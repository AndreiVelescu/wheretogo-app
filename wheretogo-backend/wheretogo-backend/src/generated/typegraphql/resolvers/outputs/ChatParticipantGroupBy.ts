import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatParticipantAvgAggregate } from "../outputs/ChatParticipantAvgAggregate";
import { ChatParticipantCountAggregate } from "../outputs/ChatParticipantCountAggregate";
import { ChatParticipantMaxAggregate } from "../outputs/ChatParticipantMaxAggregate";
import { ChatParticipantMinAggregate } from "../outputs/ChatParticipantMinAggregate";
import { ChatParticipantSumAggregate } from "../outputs/ChatParticipantSumAggregate";

@TypeGraphQL.ObjectType("ChatParticipantGroupBy", {
  simpleResolvers: true
})
export class ChatParticipantGroupBy {
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
  roomId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lastReadAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  joinedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  leftAt!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isAdmin!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  canWrite!: boolean;

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
