import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutBookingsInput } from "../inputs/LocationCreateWithoutBookingsInput";
import { LocationUpdateWithoutBookingsInput } from "../inputs/LocationUpdateWithoutBookingsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpsertWithoutBookingsInput", {})
export class LocationUpsertWithoutBookingsInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutBookingsInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutBookingsInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutBookingsInput, {
    nullable: false
  })
  create!: LocationCreateWithoutBookingsInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
