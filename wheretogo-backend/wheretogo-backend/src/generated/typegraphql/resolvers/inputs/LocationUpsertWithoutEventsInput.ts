import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutEventsInput } from "../inputs/LocationCreateWithoutEventsInput";
import { LocationUpdateWithoutEventsInput } from "../inputs/LocationUpdateWithoutEventsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpsertWithoutEventsInput", {})
export class LocationUpsertWithoutEventsInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutEventsInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutEventsInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutEventsInput, {
    nullable: false
  })
  create!: LocationCreateWithoutEventsInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
