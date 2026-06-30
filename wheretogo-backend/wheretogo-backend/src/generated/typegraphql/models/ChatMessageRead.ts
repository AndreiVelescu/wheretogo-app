import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { ChatMessage } from "../models/ChatMessage";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("ChatMessageRead", {
  simpleResolvers: true
})
export class ChatMessageRead {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  messageId!: number;

  message?: ChatMessage;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  readAt!: Date;
}
