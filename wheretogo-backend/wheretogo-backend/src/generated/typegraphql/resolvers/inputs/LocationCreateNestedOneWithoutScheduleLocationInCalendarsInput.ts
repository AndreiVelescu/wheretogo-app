import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutScheduleLocationInCalendarsInput } from "../inputs/LocationCreateOrConnectWithoutScheduleLocationInCalendarsInput";
import { LocationCreateWithoutScheduleLocationInCalendarsInput } from "../inputs/LocationCreateWithoutScheduleLocationInCalendarsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedOneWithoutScheduleLocationInCalendarsInput", {})
export class LocationCreateNestedOneWithoutScheduleLocationInCalendarsInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutScheduleLocationInCalendarsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutScheduleLocationInCalendarsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;
}
