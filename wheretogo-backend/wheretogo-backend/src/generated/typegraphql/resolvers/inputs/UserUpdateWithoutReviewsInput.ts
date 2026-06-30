import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingUpdateManyWithoutUserNestedInput } from "../inputs/BookingUpdateManyWithoutUserNestedInput";
import { ChatMessageReadUpdateManyWithoutUserNestedInput } from "../inputs/ChatMessageReadUpdateManyWithoutUserNestedInput";
import { ChatMessageUpdateManyWithoutSenderNestedInput } from "../inputs/ChatMessageUpdateManyWithoutSenderNestedInput";
import { ChatParticipantUpdateManyWithoutUserNestedInput } from "../inputs/ChatParticipantUpdateManyWithoutUserNestedInput";
import { CommentLikeUpdateManyWithoutUserNestedInput } from "../inputs/CommentLikeUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DeviceTokenUpdateManyWithoutUserNestedInput } from "../inputs/DeviceTokenUpdateManyWithoutUserNestedInput";
import { EnumUserRoleFieldUpdateOperationsInput } from "../inputs/EnumUserRoleFieldUpdateOperationsInput";
import { FavoriteUpdateManyWithoutUserNestedInput } from "../inputs/FavoriteUpdateManyWithoutUserNestedInput";
import { FollowerUpdateManyWithoutFollowerNestedInput } from "../inputs/FollowerUpdateManyWithoutFollowerNestedInput";
import { FollowerUpdateManyWithoutUserNestedInput } from "../inputs/FollowerUpdateManyWithoutUserNestedInput";
import { NotificationUpdateManyWithoutUserNestedInput } from "../inputs/NotificationUpdateManyWithoutUserNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostCollectionUpdateManyWithoutUserNestedInput } from "../inputs/PostCollectionUpdateManyWithoutUserNestedInput";
import { PostCommentUpdateManyWithoutAuthorNestedInput } from "../inputs/PostCommentUpdateManyWithoutAuthorNestedInput";
import { PostLikeUpdateManyWithoutUserNestedInput } from "../inputs/PostLikeUpdateManyWithoutUserNestedInput";
import { PostReportUpdateManyWithoutReporterNestedInput } from "../inputs/PostReportUpdateManyWithoutReporterNestedInput";
import { PostShareUpdateManyWithoutUserNestedInput } from "../inputs/PostShareUpdateManyWithoutUserNestedInput";
import { PostUpdateManyWithoutAuthorNestedInput } from "../inputs/PostUpdateManyWithoutAuthorNestedInput";
import { RefreshTokenUpdateManyWithoutUserNestedInput } from "../inputs/RefreshTokenUpdateManyWithoutUserNestedInput";
import { SavedPostUpdateManyWithoutUserNestedInput } from "../inputs/SavedPostUpdateManyWithoutUserNestedInput";
import { ScheduleLocationInCalendarUpdateManyWithoutUserNestedInput } from "../inputs/ScheduleLocationInCalendarUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TripCollaboratorUpdateManyWithoutUserNestedInput } from "../inputs/TripCollaboratorUpdateManyWithoutUserNestedInput";
import { TripUpdateManyWithoutOwnerNestedInput } from "../inputs/TripUpdateManyWithoutOwnerNestedInput";
import { UploadSessionUpdateManyWithoutUserNestedInput } from "../inputs/UploadSessionUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutReviewsInput", {})
export class UserUpdateWithoutReviewsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  nickname?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumUserRoleFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: EnumUserRoleFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  provider?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatar?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  bio?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FavoriteUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  favorites?: FavoriteUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => BookingUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  bookings?: BookingUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => FollowerUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  followers?: FollowerUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => FollowerUpdateManyWithoutFollowerNestedInput, {
    nullable: true
  })
  following?: FollowerUpdateManyWithoutFollowerNestedInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  notifications?: NotificationUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  deviceTokens?: DeviceTokenUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateManyWithoutOwnerNestedInput, {
    nullable: true
  })
  tripsOwned?: TripUpdateManyWithoutOwnerNestedInput | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  tripsShared?: TripCollaboratorUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageUpdateManyWithoutSenderNestedInput, {
    nullable: true
  })
  chatMessages?: ChatMessageUpdateManyWithoutSenderNestedInput | undefined;

  @TypeGraphQL.Field(_type => ChatParticipantUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  chatParticipants?: ChatParticipantUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  messageReads?: ChatMessageReadUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  scheduleLocationInCalendars?: ScheduleLocationInCalendarUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  postLikes?: PostLikeUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  postComments?: PostCommentUpdateManyWithoutAuthorNestedInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  commentLikes?: CommentLikeUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => SavedPostUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  savedPosts?: SavedPostUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  collections?: PostCollectionUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostShareUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  postShares?: PostShareUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => PostReportUpdateManyWithoutReporterNestedInput, {
    nullable: true
  })
  postReports?: PostReportUpdateManyWithoutReporterNestedInput | undefined;

  @TypeGraphQL.Field(_type => UploadSessionUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  uploadSessions?: UploadSessionUpdateManyWithoutUserNestedInput | undefined;
}
