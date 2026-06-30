import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutScheduleLocationInCalendarsInput } from "../inputs/LocationCreateWithoutScheduleLocationInCalendarsInput";
import { LocationUpdateWithoutScheduleLocationInCalendarsInput } from "../inputs/LocationUpdateWithoutScheduleLocationInCalendarsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpsertWithoutScheduleLocationInCalendarsInput", {})
export class LocationUpsertWithoutScheduleLocationInCalendarsInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutScheduleLocationInCalendarsInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutScheduleLocationInCalendarsInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutScheduleLocationInCalendarsInput, {
    nullable: false
  })
  create!: LocationCreateWithoutScheduleLocationInCalendarsInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
