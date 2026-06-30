import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateNestedOneWithoutNotificationsInput } from "../inputs/EventCreateNestedOneWithoutNotificationsInput";
import { LocationCreateNestedOneWithoutNotificationsInput } from "../inputs/LocationCreateNestedOneWithoutNotificationsInput";
import { TripCreateNestedOneWithoutNotificationsInput } from "../inputs/TripCreateNestedOneWithoutNotificationsInput";
import { UserCreateNestedOneWithoutNotificationsInput } from "../inputs/UserCreateNestedOneWithoutNotificationsInput";
import { NotificationType } from "../../enums/NotificationType";

@TypeGraphQL.InputType("NotificationCreateInput", {})
export class NotificationCreateInput {
  @TypeGraphQL.Field(_type => NotificationType, {
    nullable: false
  })
  type!: "TRIP_COLLABORATOR_ADDED" | "TRIP_COLLABORATOR_REMOVED" | "TRIP_UPDATED" | "TRIP_REMINDER" | "TRIP_STARTED" | "NEW_FOLLOWER" | "NEW_REVIEW" | "REVIEW_LIKED" | "NEW_LOCATION_NEARBY" | "LOCATION_UPDATE" | "BOOKING_CONFIRMED" | "BOOKING_CANCELLED" | "BOOKING_REMINDER" | "ACCOUNT_VERIFIED" | "PROMO" | "SYSTEM";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  data?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isRead?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutNotificationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutNotificationsInput, {
    nullable: true
  })
  location?: LocationCreateNestedOneWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => EventCreateNestedOneWithoutNotificationsInput, {
    nullable: true
  })
  event?: EventCreateNestedOneWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateNestedOneWithoutNotificationsInput, {
    nullable: true
  })
  trip?: TripCreateNestedOneWithoutNotificationsInput | undefined;
}
