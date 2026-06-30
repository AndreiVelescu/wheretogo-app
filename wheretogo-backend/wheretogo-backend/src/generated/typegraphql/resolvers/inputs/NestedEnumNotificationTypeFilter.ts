import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationType } from "../../enums/NotificationType";

@TypeGraphQL.InputType("NestedEnumNotificationTypeFilter", {})
export class NestedEnumNotificationTypeFilter {
  @TypeGraphQL.Field(_type => NotificationType, {
    nullable: true
  })
  equals?: "TRIP_COLLABORATOR_ADDED" | "TRIP_COLLABORATOR_REMOVED" | "TRIP_UPDATED" | "TRIP_REMINDER" | "TRIP_STARTED" | "NEW_FOLLOWER" | "NEW_REVIEW" | "REVIEW_LIKED" | "NEW_LOCATION_NEARBY" | "LOCATION_UPDATE" | "BOOKING_CONFIRMED" | "BOOKING_CANCELLED" | "BOOKING_REMINDER" | "ACCOUNT_VERIFIED" | "PROMO" | "SYSTEM" | undefined;

  @TypeGraphQL.Field(_type => [NotificationType], {
    nullable: true
  })
  in?: Array<"TRIP_COLLABORATOR_ADDED" | "TRIP_COLLABORATOR_REMOVED" | "TRIP_UPDATED" | "TRIP_REMINDER" | "TRIP_STARTED" | "NEW_FOLLOWER" | "NEW_REVIEW" | "REVIEW_LIKED" | "NEW_LOCATION_NEARBY" | "LOCATION_UPDATE" | "BOOKING_CONFIRMED" | "BOOKING_CANCELLED" | "BOOKING_REMINDER" | "ACCOUNT_VERIFIED" | "PROMO" | "SYSTEM"> | undefined;

  @TypeGraphQL.Field(_type => [NotificationType], {
    nullable: true
  })
  notIn?: Array<"TRIP_COLLABORATOR_ADDED" | "TRIP_COLLABORATOR_REMOVED" | "TRIP_UPDATED" | "TRIP_REMINDER" | "TRIP_STARTED" | "NEW_FOLLOWER" | "NEW_REVIEW" | "REVIEW_LIKED" | "NEW_LOCATION_NEARBY" | "LOCATION_UPDATE" | "BOOKING_CONFIRMED" | "BOOKING_CANCELLED" | "BOOKING_REMINDER" | "ACCOUNT_VERIFIED" | "PROMO" | "SYSTEM"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNotificationTypeFilter, {
    nullable: true
  })
  not?: NestedEnumNotificationTypeFilter | undefined;
}
