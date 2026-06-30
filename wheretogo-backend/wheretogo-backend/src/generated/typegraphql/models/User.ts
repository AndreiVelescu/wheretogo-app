import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Booking } from "../models/Booking";
import { ChatMessage } from "../models/ChatMessage";
import { ChatMessageRead } from "../models/ChatMessageRead";
import { ChatParticipant } from "../models/ChatParticipant";
import { CommentLike } from "../models/CommentLike";
import { DeviceToken } from "../models/DeviceToken";
import { Favorite } from "../models/Favorite";
import { Follower } from "../models/Follower";
import { Notification } from "../models/Notification";
import { Post } from "../models/Post";
import { PostCollection } from "../models/PostCollection";
import { PostComment } from "../models/PostComment";
import { PostLike } from "../models/PostLike";
import { PostReport } from "../models/PostReport";
import { PostShare } from "../models/PostShare";
import { RefreshToken } from "../models/RefreshToken";
import { Review } from "../models/Review";
import { SavedPost } from "../models/SavedPost";
import { ScheduleLocationInCalendar } from "../models/ScheduleLocationInCalendar";
import { Trip } from "../models/Trip";
import { TripCollaborator } from "../models/TripCollaborator";
import { UploadSession } from "../models/UploadSession";
import { UserRole } from "../enums/UserRole";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  simpleResolvers: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nickname?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => UserRole, {
    nullable: false
  })
  role!: "USER" | "BUSINESS" | "ADMIN";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  provider!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | null;

  favorites?: Favorite[];

  reviews?: Review[];

  bookings?: Booking[];

  followers?: Follower[];

  following?: Follower[];

  notifications?: Notification[];

  deviceTokens?: DeviceToken[];

  tripsOwned?: Trip[];

  tripsShared?: TripCollaborator[];

  chatMessages?: ChatMessage[];

  chatParticipants?: ChatParticipant[];

  messageReads?: ChatMessageRead[];

  refreshTokens?: RefreshToken[];

  scheduleLocationInCalendars?: ScheduleLocationInCalendar[];

  posts?: Post[];

  postLikes?: PostLike[];

  postComments?: PostComment[];

  commentLikes?: CommentLike[];

  savedPosts?: SavedPost[];

  collections?: PostCollection[];

  postShares?: PostShare[];

  postReports?: PostReport[];

  uploadSessions?: UploadSession[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
