import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateNestedManyWithoutTripInput } from "../inputs/NotificationCreateNestedManyWithoutTripInput";
import { PostCreateNestedManyWithoutTripInput } from "../inputs/PostCreateNestedManyWithoutTripInput";
import { TripCollaboratorCreateNestedManyWithoutTripInput } from "../inputs/TripCollaboratorCreateNestedManyWithoutTripInput";
import { TripDayCreateNestedManyWithoutTripInput } from "../inputs/TripDayCreateNestedManyWithoutTripInput";
import { UserCreateNestedOneWithoutTripsOwnedInput } from "../inputs/UserCreateNestedOneWithoutTripsOwnedInput";
import { TripStatus } from "../../enums/TripStatus";

@TypeGraphQL.InputType("TripCreateWithoutChatRoomInput", {})
export class TripCreateWithoutChatRoomInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => TripStatus, {
    nullable: true
  })
  status?: "DRAFT" | "PLANNED" | "ACTIVE" | "COMPLETED" | "CANCELLED" | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  country?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPublic?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  totalBudget?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  currency?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTripsOwnedInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutTripsOwnedInput;

  @TypeGraphQL.Field(_type => TripDayCreateNestedManyWithoutTripInput, {
    nullable: true
  })
  days?: TripDayCreateNestedManyWithoutTripInput | undefined;

  @TypeGraphQL.Field(_type => TripCollaboratorCreateNestedManyWithoutTripInput, {
    nullable: true
  })
  collaborators?: TripCollaboratorCreateNestedManyWithoutTripInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutTripInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutTripInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateNestedManyWithoutTripInput, {
    nullable: true
  })
  posts?: PostCreateNestedManyWithoutTripInput | undefined;
}
