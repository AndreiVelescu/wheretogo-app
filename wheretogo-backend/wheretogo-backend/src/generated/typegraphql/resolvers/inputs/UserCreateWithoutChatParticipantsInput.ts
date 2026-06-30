import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingCreateNestedManyWithoutUserInput } from "../inputs/BookingCreateNestedManyWithoutUserInput";
import { ChatMessageCreateNestedManyWithoutSenderInput } from "../inputs/ChatMessageCreateNestedManyWithoutSenderInput";
import { ChatMessageReadCreateNestedManyWithoutUserInput } from "../inputs/ChatMessageReadCreateNestedManyWithoutUserInput";
import { CommentLikeCreateNestedManyWithoutUserInput } from "../inputs/CommentLikeCreateNestedManyWithoutUserInput";
import { DeviceTokenCreateNestedManyWithoutUserInput } from "../inputs/DeviceTokenCreateNestedManyWithoutUserInput";
import { FavoriteCreateNestedManyWithoutUserInput } from "../inputs/FavoriteCreateNestedManyWithoutUserInput";
import { FollowerCreateNestedManyWithoutFollowerInput } from "../inputs/FollowerCreateNestedManyWithoutFollowerInput";
import { FollowerCreateNestedManyWithoutUserInput } from "../inputs/FollowerCreateNestedManyWithoutUserInput";
import { NotificationCreateNestedManyWithoutUserInput } from "../inputs/NotificationCreateNestedManyWithoutUserInput";
import { PostCollectionCreateNestedManyWithoutUserInput } from "../inputs/PostCollectionCreateNestedManyWithoutUserInput";
import { PostCommentCreateNestedManyWithoutAuthorInput } from "../inputs/PostCommentCreateNestedManyWithoutAuthorInput";
import { PostCreateNestedManyWithoutAuthorInput } from "../inputs/PostCreateNestedManyWithoutAuthorInput";
import { PostLikeCreateNestedManyWithoutUserInput } from "../inputs/PostLikeCreateNestedManyWithoutUserInput";
import { PostReportCreateNestedManyWithoutReporterInput } from "../inputs/PostReportCreateNestedManyWithoutReporterInput";
import { PostShareCreateNestedManyWithoutUserInput } from "../inputs/PostShareCreateNestedManyWithoutUserInput";
import { RefreshTokenCreateNestedManyWithoutUserInput } from "../inputs/RefreshTokenCreateNestedManyWithoutUserInput";
import { ReviewCreateNestedManyWithoutUserInput } from "../inputs/ReviewCreateNestedManyWithoutUserInput";
import { SavedPostCreateNestedManyWithoutUserInput } from "../inputs/SavedPostCreateNestedManyWithoutUserInput";
import { ScheduleLocationInCalendarCreateNestedManyWithoutUserInput } from "../inputs/ScheduleLocationInCalendarCreateNestedManyWithoutUserInput";
import { TripCollaboratorCreateNestedManyWithoutUserInput } from "../inputs/TripCollaboratorCreateNestedManyWithoutUserInput";
import { TripCreateNestedManyWithoutOwnerInput } from "../inputs/TripCreateNestedManyWithoutOwnerInput";
import { UploadSessionCreateNestedManyWithoutUserInput } from "../inputs/UploadSessionCreateNestedManyWithoutUserInput";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType("UserCreateWithoutChatParticipantsInput", {})
export class UserCreateWithoutChatParticipantsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nickname?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  role?: "USER" | "BUSINESS" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provider?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => FavoriteCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  favorites?: FavoriteCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  reviews?: ReviewCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => BookingCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  bookings?: BookingCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FollowerCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  followers?: FollowerCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => FollowerCreateNestedManyWithoutFollowerInput, {
    nullable: true
  })
  following?: FollowerCreateNestedManyWithoutFollowerInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DeviceTokenCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  deviceTokens?: DeviceTokenCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  tripsOwned?: TripCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  tripsShared?: TripCollaboratorCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCreateNestedManyWithoutSenderInput, {
    nullable: true
  })
  chatMessages?: ChatMessageCreateNestedManyWithoutSenderInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageReadCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  messageReads?: ChatMessageReadCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => RefreshTokenCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ScheduleLocationInCalendarCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  scheduleLocationInCalendars?: ScheduleLocationInCalendarCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => PostLikeCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  postLikes?: PostLikeCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  postComments?: PostCommentCreateNestedManyWithoutAuthorInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  commentLikes?: CommentLikeCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => SavedPostCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  savedPosts?: SavedPostCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostCollectionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  collections?: PostCollectionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostShareCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  postShares?: PostShareCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => PostReportCreateNestedManyWithoutReporterInput, {
    nullable: true
  })
  postReports?: PostReportCreateNestedManyWithoutReporterInput | undefined;

  @TypeGraphQL.Field(_type => UploadSessionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  uploadSessions?: UploadSessionCreateNestedManyWithoutUserInput | undefined;
}
