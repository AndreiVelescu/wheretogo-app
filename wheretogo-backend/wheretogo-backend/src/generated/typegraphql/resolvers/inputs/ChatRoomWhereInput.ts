import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageListRelationFilter } from "../inputs/ChatMessageListRelationFilter";
import { ChatParticipantListRelationFilter } from "../inputs/ChatParticipantListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumChatRoomTypeFilter } from "../inputs/EnumChatRoomTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TripNullableRelationFilter } from "../inputs/TripNullableRelationFilter";

@TypeGraphQL.InputType("ChatRoomWhereInput", {})
export class ChatRoomWhereInput {
  @TypeGraphQL.Field(_type => [ChatRoomWhereInput], {
    nullable: true
  })
  AND?: ChatRoomWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatRoomWhereInput], {
    nullable: true
  })
  OR?: ChatRoomWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ChatRoomWhereInput], {
    nullable: true
  })
  NOT?: ChatRoomWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumChatRoomTypeFilter, {
    nullable: true
  })
  type?: EnumChatRoomTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  tripId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  lastMessageAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => TripNullableRelationFilter, {
    nullable: true
  })
  trip?: TripNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatMessageListRelationFilter, {
    nullable: true
  })
  messages?: ChatMessageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantListRelationFilter, {
    nullable: true
  })
  participants?: ChatParticipantListRelationFilter | undefined;
}
