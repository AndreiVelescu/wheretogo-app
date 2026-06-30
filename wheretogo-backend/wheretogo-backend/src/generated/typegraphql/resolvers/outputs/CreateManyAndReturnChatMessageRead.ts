import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessage } from "../../models/ChatMessage";
import { User } from "../../models/User";

@TypeGraphQL.ObjectType("CreateManyAndReturnChatMessageRead", {
  simpleResolvers: true
})
export class CreateManyAndReturnChatMessageRead {
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

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  user!: User;

  @TypeGraphQL.Field(_type => ChatMessage, {
    nullable: false
  })
  message!: ChatMessage;
}
