import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageAvgAggregate } from "../outputs/ChatMessageAvgAggregate";
import { ChatMessageCountAggregate } from "../outputs/ChatMessageCountAggregate";
import { ChatMessageMaxAggregate } from "../outputs/ChatMessageMaxAggregate";
import { ChatMessageMinAggregate } from "../outputs/ChatMessageMinAggregate";
import { ChatMessageSumAggregate } from "../outputs/ChatMessageSumAggregate";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.ObjectType("ChatMessageGroupBy", {
  simpleResolvers: true
})
export class ChatMessageGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string;

  @TypeGraphQL.Field(_type => MessageType, {
    nullable: false
  })
  type!: "TEXT" | "IMAGE" | "LOCATION" | "FILE" | "SYSTEM";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  senderId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  roomId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  replyToId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  editedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt!: Date | null;

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
