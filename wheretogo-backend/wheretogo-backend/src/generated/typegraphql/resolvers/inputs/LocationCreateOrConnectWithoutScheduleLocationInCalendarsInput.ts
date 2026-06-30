import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutScheduleLocationInCalendarsInput } from "../inputs/LocationCreateWithoutScheduleLocationInCalendarsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateOrConnectWithoutScheduleLocationInCalendarsInput", {})
export class LocationCreateOrConnectWithoutScheduleLocationInCalendarsInput {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutScheduleLocationInCalendarsInput, {
    nullable: false
  })
  create!: LocationCreateWithoutScheduleLocationInCalendarsInput;
}
