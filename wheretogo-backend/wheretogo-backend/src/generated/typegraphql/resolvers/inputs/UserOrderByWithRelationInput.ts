import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingOrderByRelationAggregateInput } from "../inputs/BookingOrderByRelationAggregateInput";
import { ChatMessageOrderByRelationAggregateInput } from "../inputs/ChatMessageOrderByRelationAggregateInput";
import { ChatMessageReadOrderByRelationAggregateInput } from "../inputs/ChatMessageReadOrderByRelationAggregateInput";
import { ChatParticipantOrderByRelationAggregateInput } from "../inputs/ChatParticipantOrderByRelationAggregateInput";
import { CommentLikeOrderByRelationAggregateInput } from "../inputs/CommentLikeOrderByRelationAggregateInput";
import { DeviceTokenOrderByRelationAggregateInput } from "../inputs/DeviceTokenOrderByRelationAggregateInput";
import { FavoriteOrderByRelationAggregateInput } from "../inputs/FavoriteOrderByRelationAggregateInput";
import { FollowerOrderByRelationAggregateInput } from "../inputs/FollowerOrderByRelationAggregateInput";
import { NotificationOrderByRelationAggregateInput } from "../inputs/NotificationOrderByRelationAggregateInput";
import { PostCollectionOrderByRelationAggregateInput } from "../inputs/PostCollectionOrderByRelationAggregateInput";
import { PostCommentOrderByRelationAggregateInput } from "../inputs/PostCommentOrderByRelationAggregateInput";
import { PostLikeOrderByRelationAggregateInput } from "../inputs/PostLikeOrderByRelationAggregateInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { PostReportOrderByRelationAggregateInput } from "../inputs/PostReportOrderByRelationAggregateInput";
import { PostShareOrderByRelationAggregateInput } from "../inputs/PostShareOrderByRelationAggregateInput";
import { RefreshTokenOrderByRelationAggregateInput } from "../inputs/RefreshTokenOrderByRelationAggregateInput";
import { ReviewOrderByRelationAggregateInput } from "../inputs/ReviewOrderByRelationAggregateInput";
import { SavedPostOrderByRelationAggregateInput } from "../inputs/SavedPostOrderByRelationAggregateInput";
import { ScheduleLocationInCalendarOrderByRelationAggregateInput } from "../inputs/ScheduleLocationInCalendarOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TripCollaboratorOrderByRelationAggregateInput } from "../inputs/TripCollaboratorOrderByRelationAggregateInput";
import { TripOrderByRelationAggregateInput } from "../inputs/TripOrderByRelationAggregateInput";
import { UploadSessionOrderByRelationAggregateInput } from "../inputs/UploadSessionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  nickname?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  password?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  role?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  provider?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  avatar?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  bio?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FavoriteOrderByRelationAggregateInput, {
    nullable: true
  })
  favorites?: FavoriteOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReviewOrderByRelationAggregateInput, {
    nullable: true
  })
  reviews?: ReviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BookingOrderByRelationAggregateInput, {
    nullable: true
  })
  bookings?: BookingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowerOrderByRelationAggregateInput, {
    nullable: true
  })
  followers?: FollowerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FollowerOrderByRelationAggregateInput, {
    nullable: true
  })
  following?: FollowerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NotificationOrderByRelationAggregateInput, {
    nullable: true
  })
  notifications?: NotificationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenOrderByRelationAggregateInput, {
    nullable: true
  })
  deviceTokens?: DeviceTokenOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripOrderByRelationAggregateInput, {
    nullable: true
  })
  tripsOwned?: TripOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorOrderByRelationAggregateInput, {
    nullable: true
  })
  tripsShared?: TripCollaboratorOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageOrderByRelationAggregateInput, {
    nullable: true
  })
  chatMessages?: ChatMessageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantOrderByRelationAggregateInput, {
    nullable: true
  })
  chatParticipants?: ChatParticipantOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadOrderByRelationAggregateInput, {
    nullable: true
  })
  messageReads?: ChatMessageReadOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenOrderByRelationAggregateInput, {
    nullable: true
  })
  refreshTokens?: RefreshTokenOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarOrderByRelationAggregateInput, {
    nullable: true
  })
  scheduleLocationInCalendars?: ScheduleLocationInCalendarOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput, {
    nullable: true
  })
  posts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  postLikes?: PostLikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentOrderByRelationAggregateInput, {
    nullable: true
  })
  postComments?: PostCommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeOrderByRelationAggregateInput, {
    nullable: true
  })
  commentLikes?: CommentLikeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SavedPostOrderByRelationAggregateInput, {
    nullable: true
  })
  savedPosts?: SavedPostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionOrderByRelationAggregateInput, {
    nullable: true
  })
  collections?: PostCollectionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostShareOrderByRelationAggregateInput, {
    nullable: true
  })
  postShares?: PostShareOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PostReportOrderByRelationAggregateInput, {
    nullable: true
  })
  postReports?: PostReportOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UploadSessionOrderByRelationAggregateInput, {
    nullable: true
  })
  uploadSessions?: UploadSessionOrderByRelationAggregateInput | undefined;
}
