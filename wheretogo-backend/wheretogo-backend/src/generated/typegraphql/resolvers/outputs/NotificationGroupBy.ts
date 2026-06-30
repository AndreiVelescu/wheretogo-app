import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationAvgAggregate } from "../outputs/NotificationAvgAggregate";
import { NotificationCountAggregate } from "../outputs/NotificationCountAggregate";
import { NotificationMaxAggregate } from "../outputs/NotificationMaxAggregate";
import { NotificationMinAggregate } from "../outputs/NotificationMinAggregate";
import { NotificationSumAggregate } from "../outputs/NotificationSumAggregate";
import { NotificationType } from "../../enums/NotificationType";

@TypeGraphQL.ObjectType("NotificationGroupBy", {
  simpleResolvers: true
})
export class NotificationGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

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
  data!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isRead!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  locationId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  eventId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tripId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => NotificationCountAggregate, {
    nullable: true
  })
  _count!: NotificationCountAggregate | null;

  @TypeGraphQL.Field(_type => NotificationAvgAggregate, {
    nullable: true
  })
  _avg!: NotificationAvgAggregate | null;

  @TypeGraphQL.Field(_type => NotificationSumAggregate, {
    nullable: true
  })
  _sum!: NotificationSumAggregate | null;

  @TypeGraphQL.Field(_type => NotificationMinAggregate, {
    nullable: true
  })
  _min!: NotificationMinAggregate | null;

  @TypeGraphQL.Field(_type => NotificationMaxAggregate, {
    nullable: true
  })
  _max!: NotificationMaxAggregate | null;
}
