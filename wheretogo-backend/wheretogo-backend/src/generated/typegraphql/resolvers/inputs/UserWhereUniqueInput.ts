import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingListRelationFilter } from "../inputs/BookingListRelationFilter";
import { ChatMessageListRelationFilter } from "../inputs/ChatMessageListRelationFilter";
import { ChatMessageReadListRelationFilter } from "../inputs/ChatMessageReadListRelationFilter";
import { ChatParticipantListRelationFilter } from "../inputs/ChatParticipantListRelationFilter";
import { CommentLikeListRelationFilter } from "../inputs/CommentLikeListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DeviceTokenListRelationFilter } from "../inputs/DeviceTokenListRelationFilter";
import { EnumUserRoleFilter } from "../inputs/EnumUserRoleFilter";
import { FavoriteListRelationFilter } from "../inputs/FavoriteListRelationFilter";
import { FollowerListRelationFilter } from "../inputs/FollowerListRelationFilter";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { PostCollectionListRelationFilter } from "../inputs/PostCollectionListRelationFilter";
import { PostCommentListRelationFilter } from "../inputs/PostCommentListRelationFilter";
import { PostLikeListRelationFilter } from "../inputs/PostLikeListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { PostReportListRelationFilter } from "../inputs/PostReportListRelationFilter";
import { PostShareListRelationFilter } from "../inputs/PostShareListRelationFilter";
import { RefreshTokenListRelationFilter } from "../inputs/RefreshTokenListRelationFilter";
import { ReviewListRelationFilter } from "../inputs/ReviewListRelationFilter";
import { SavedPostListRelationFilter } from "../inputs/SavedPostListRelationFilter";
import { ScheduleLocationInCalendarListRelationFilter } from "../inputs/ScheduleLocationInCalendarListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TripCollaboratorListRelationFilter } from "../inputs/TripCollaboratorListRelationFilter";
import { TripListRelationFilter } from "../inputs/TripListRelationFilter";
import { UploadSessionListRelationFilter } from "../inputs/UploadSessionListRelationFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserWhereUniqueInput", {})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nickname?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumUserRoleFilter, {
    nullable: true
  })
  role?: EnumUserRoleFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  provider?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  avatar?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  bio?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FavoriteListRelationFilter, {
    nullable: true
  })
  favorites?: FavoriteListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ReviewListRelationFilter, {
    nullable: true
  })
  reviews?: ReviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => BookingListRelationFilter, {
    nullable: true
  })
  bookings?: BookingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowerListRelationFilter, {
    nullable: true
  })
  followers?: FollowerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FollowerListRelationFilter, {
    nullable: true
  })
  following?: FollowerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationListRelationFilter, {
    nullable: true
  })
  notifications?: NotificationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenListRelationFilter, {
    nullable: true
  })
  deviceTokens?: DeviceTokenListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TripListRelationFilter, {
    nullable: true
  })
  tripsOwned?: TripListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorListRelationFilter, {
    nullable: true
  })
  tripsShared?: TripCollaboratorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatMessageListRelationFilter, {
    nullable: true
  })
  chatMessages?: ChatMessageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantListRelationFilter, {
    nullable: true
  })
  chatParticipants?: ChatParticipantListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadListRelationFilter, {
    nullable: true
  })
  messageReads?: ChatMessageReadListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenListRelationFilter, {
    nullable: true
  })
  refreshTokens?: RefreshTokenListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarListRelationFilter, {
    nullable: true
  })
  scheduleLocationInCalendars?: ScheduleLocationInCalendarListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostListRelationFilter, {
    nullable: true
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostLikeListRelationFilter, {
    nullable: true
  })
  postLikes?: PostLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostCommentListRelationFilter, {
    nullable: true
  })
  postComments?: PostCommentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CommentLikeListRelationFilter, {
    nullable: true
  })
  commentLikes?: CommentLikeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SavedPostListRelationFilter, {
    nullable: true
  })
  savedPosts?: SavedPostListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostCollectionListRelationFilter, {
    nullable: true
  })
  collections?: PostCollectionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostShareListRelationFilter, {
    nullable: true
  })
  postShares?: PostShareListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PostReportListRelationFilter, {
    nullable: true
  })
  postReports?: PostReportListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UploadSessionListRelationFilter, {
    nullable: true
  })
  uploadSessions?: UploadSessionListRelationFilter | undefined;
}
