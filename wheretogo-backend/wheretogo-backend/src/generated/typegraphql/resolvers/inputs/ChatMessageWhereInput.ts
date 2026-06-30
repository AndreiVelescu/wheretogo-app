import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageListRelationFilter } from "../inputs/ChatMessageListRelationFilter";
import { ChatMessageNullableRelationFilter } from "../inputs/ChatMessageNullableRelationFilter";
import { ChatMessageReadListRelationFilter } from "../inputs/ChatMessageReadListRelationFilter";
import { ChatRoomRelationFilter } from "../inputs/ChatRoomRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumMessageTypeFilter } from "../inputs/EnumMessageTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("ChatMessageWhereInput", {})
export class ChatMessageWhereInput {
  @TypeGraphQL.Field(_type => [ChatMessageWhereInput], {
    nullable: true
  })
  AND?: ChatMessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageWhereInput], {
    nullable: true
  })
  OR?: ChatMessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatMessageWhereInput], {
    nullable: true
  })
  NOT?: ChatMessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMessageTypeFilter, {
    nullable: true
  })
  type?: EnumMessageTypeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  senderId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  roomId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  replyToId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  editedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  deletedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  sender?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatRoomRelationFilter, {
    nullable: true
  })
  room?: ChatRoomRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatMessageNullableRelationFilter, {
    nullable: true
  })
  replyTo?: ChatMessageNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatMessageListRelationFilter, {
    nullable: true
  })
  replies?: ChatMessageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadListRelationFilter, {
    nullable: true
  })
  readBy?: ChatMessageReadListRelationFilter | undefined;
}
