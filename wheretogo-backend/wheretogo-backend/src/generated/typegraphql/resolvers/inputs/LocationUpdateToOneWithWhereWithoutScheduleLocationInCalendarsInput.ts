import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutScheduleLocationInCalendarsInput } from "../inputs/LocationUpdateWithoutScheduleLocationInCalendarsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput", {})
export class LocationUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutScheduleLocationInCalendarsInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutScheduleLocationInCalendarsInput;
}
