import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCountReadByArgs } from "./args/ChatMessageCountReadByArgs";
import { ChatMessageCountRepliesArgs } from "./args/ChatMessageCountRepliesArgs";

@TypeGraphQL.ObjectType("ChatMessageCount", {
  simpleResolvers: true
})
export class ChatMessageCount {
  replies!: number;
  readBy!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "replies",
    nullable: false
  })
  getReplies(@TypeGraphQL.Root() root: ChatMessageCount, @TypeGraphQL.Args() args: ChatMessageCountRepliesArgs): number {
    return root.replies;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "readBy",
    nullable: false
  })
  getReadBy(@TypeGraphQL.Root() root: ChatMessageCount, @TypeGraphQL.Args() args: ChatMessageCountReadByArgs): number {
    return root.readBy;
  }
}
