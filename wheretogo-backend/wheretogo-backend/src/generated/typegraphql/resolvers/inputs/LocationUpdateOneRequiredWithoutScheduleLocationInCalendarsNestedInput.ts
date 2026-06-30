import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutScheduleLocationInCalendarsInput } from "../inputs/LocationCreateOrConnectWithoutScheduleLocationInCalendarsInput";
import { LocationCreateWithoutScheduleLocationInCalendarsInput } from "../inputs/LocationCreateWithoutScheduleLocationInCalendarsInput";
import { LocationUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput } from "../inputs/LocationUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput";
import { LocationUpsertWithoutScheduleLocationInCalendarsInput } from "../inputs/LocationUpsertWithoutScheduleLocationInCalendarsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput", {})
export class LocationUpdateOneRequiredWithoutScheduleLocationInCalendarsNestedInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutScheduleLocationInCalendarsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutScheduleLocationInCalendarsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpsertWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  upsert?: LocationUpsertWithoutScheduleLocationInCalendarsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput, {
    nullable: true
  })
  update?: LocationUpdateToOneWithWhereWithoutScheduleLocationInCalendarsInput | undefined;
}
