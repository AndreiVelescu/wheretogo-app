import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatRoom } from "../../models/ChatRoom";
import { User } from "../../models/User";

@TypeGraphQL.ObjectType("CreateManyAndReturnChatParticipant", {
  simpleResolvers: true
})
export class CreateManyAndReturnChatParticipant {
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

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  user!: User;

  @TypeGraphQL.Field(_type => ChatRoom, {
    nullable: false
  })
  room!: ChatRoom;
}
