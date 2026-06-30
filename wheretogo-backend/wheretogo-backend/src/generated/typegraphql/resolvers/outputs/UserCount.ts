import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountBookingsArgs } from "./args/UserCountBookingsArgs";
import { UserCountChatMessagesArgs } from "./args/UserCountChatMessagesArgs";
import { UserCountChatParticipantsArgs } from "./args/UserCountChatParticipantsArgs";
import { UserCountCollectionsArgs } from "./args/UserCountCollectionsArgs";
import { UserCountCommentLikesArgs } from "./args/UserCountCommentLikesArgs";
import { UserCountDeviceTokensArgs } from "./args/UserCountDeviceTokensArgs";
import { UserCountFavoritesArgs } from "./args/UserCountFavoritesArgs";
import { UserCountFollowersArgs } from "./args/UserCountFollowersArgs";
import { UserCountFollowingArgs } from "./args/UserCountFollowingArgs";
import { UserCountMessageReadsArgs } from "./args/UserCountMessageReadsArgs";
import { UserCountNotificationsArgs } from "./args/UserCountNotificationsArgs";
import { UserCountPostCommentsArgs } from "./args/UserCountPostCommentsArgs";
import { UserCountPostLikesArgs } from "./args/UserCountPostLikesArgs";
import { UserCountPostReportsArgs } from "./args/UserCountPostReportsArgs";
import { UserCountPostSharesArgs } from "./args/UserCountPostSharesArgs";
import { UserCountPostsArgs } from "./args/UserCountPostsArgs";
import { UserCountRefreshTokensArgs } from "./args/UserCountRefreshTokensArgs";
import { UserCountReviewsArgs } from "./args/UserCountReviewsArgs";
import { UserCountSavedPostsArgs } from "./args/UserCountSavedPostsArgs";
import { UserCountScheduleLocationInCalendarsArgs } from "./args/UserCountScheduleLocationInCalendarsArgs";
import { UserCountTripsOwnedArgs } from "./args/UserCountTripsOwnedArgs";
import { UserCountTripsSharedArgs } from "./args/UserCountTripsSharedArgs";
import { UserCountUploadSessionsArgs } from "./args/UserCountUploadSessionsArgs";

@TypeGraphQL.ObjectType("UserCount", {
  simpleResolvers: true
})
export class UserCount {
  favorites!: number;
  reviews!: number;
  bookings!: number;
  followers!: number;
  following!: number;
  notifications!: number;
  deviceTokens!: number;
  tripsOwned!: number;
  tripsShared!: number;
  chatMessages!: number;
  chatParticipants!: number;
  messageReads!: number;
  refreshTokens!: number;
  scheduleLocationInCalendars!: number;
  posts!: number;
  postLikes!: number;
  postComments!: number;
  commentLikes!: number;
  savedPosts!: number;
  collections!: number;
  postShares!: number;
  postReports!: number;
  uploadSessions!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "favorites",
    nullable: false
  })
  getFavorites(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountFavoritesArgs): number {
    return root.favorites;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "reviews",
    nullable: false
  })
  getReviews(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountReviewsArgs): number {
    return root.reviews;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "bookings",
    nullable: false
  })
  getBookings(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountBookingsArgs): number {
    return root.bookings;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "followers",
    nullable: false
  })
  getFollowers(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountFollowersArgs): number {
    return root.followers;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "following",
    nullable: false
  })
  getFollowing(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountFollowingArgs): number {
    return root.following;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "notifications",
    nullable: false
  })
  getNotifications(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountNotificationsArgs): number {
    return root.notifications;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "deviceTokens",
    nullable: false
  })
  getDeviceTokens(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountDeviceTokensArgs): number {
    return root.deviceTokens;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "tripsOwned",
    nullable: false
  })
  getTripsOwned(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountTripsOwnedArgs): number {
    return root.tripsOwned;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "tripsShared",
    nullable: false
  })
  getTripsShared(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountTripsSharedArgs): number {
    return root.tripsShared;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "chatMessages",
    nullable: false
  })
  getChatMessages(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountChatMessagesArgs): number {
    return root.chatMessages;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "chatParticipants",
    nullable: false
  })
  getChatParticipants(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountChatParticipantsArgs): number {
    return root.chatParticipants;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "messageReads",
    nullable: false
  })
  getMessageReads(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountMessageReadsArgs): number {
    return root.messageReads;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "refreshTokens",
    nullable: false
  })
  getRefreshTokens(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountRefreshTokensArgs): number {
    return root.refreshTokens;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "scheduleLocationInCalendars",
    nullable: false
  })
  getScheduleLocationInCalendars(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountScheduleLocationInCalendarsArgs): number {
    return root.scheduleLocationInCalendars;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostsArgs): number {
    return root.posts;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "postLikes",
    nullable: false
  })
  getPostLikes(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostLikesArgs): number {
    return root.postLikes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "postComments",
    nullable: false
  })
  getPostComments(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostCommentsArgs): number {
    return root.postComments;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "commentLikes",
    nullable: false
  })
  getCommentLikes(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountCommentLikesArgs): number {
    return root.commentLikes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "savedPosts",
    nullable: false
  })
  getSavedPosts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountSavedPostsArgs): number {
    return root.savedPosts;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "collections",
    nullable: false
  })
  getCollections(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountCollectionsArgs): number {
    return root.collections;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "postShares",
    nullable: false
  })
  getPostShares(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostSharesArgs): number {
    return root.postShares;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "postReports",
    nullable: false
  })
  getPostReports(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostReportsArgs): number {
    return root.postReports;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "uploadSessions",
    nullable: false
  })
  getUploadSessions(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountUploadSessionsArgs): number {
    return root.uploadSessions;
  }
}
