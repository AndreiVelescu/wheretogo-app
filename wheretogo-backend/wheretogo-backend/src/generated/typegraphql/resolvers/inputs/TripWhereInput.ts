import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { ChatRoomNullableRelationFilter } from "../inputs/ChatRoomNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumTripStatusFilter } from "../inputs/EnumTripStatusFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TripCollaboratorListRelationFilter } from "../inputs/TripCollaboratorListRelationFilter";
import { TripDayListRelationFilter } from "../inputs/TripDayListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TripWhereInput", {})
export class TripWhereInput {
  @TypeGraphQL.Field(_type => [TripWhereInput], {
    nullable: true
  })
  AND?: TripWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereInput], {
    nullable: true
  })
  OR?: TripWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereInput], {
    nullable: true
  })
  NOT?: TripWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ownerId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumTripStatusFilter, {
    nullable: true
  })
  status?: EnumTripStatusFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  startDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  endDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  city?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  country?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  totalBudget?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  currency?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TripDayListRelationFilter, {
    nullable: true
  })
  days?: TripDayListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorListRelationFilter, {
    nullable: true
  })
  collaborators?: TripCollaboratorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationListRelationFilter, {
    nullable: true
  })
  notifications?: NotificationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatRoomNullableRelationFilter, {
    nullable: true
  })
  chatRoom?: ChatRoomNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;
}
