import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutBookingsInput } from "../inputs/LocationUpdateWithoutBookingsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpdateToOneWithWhereWithoutBookingsInput", {})
export class LocationUpdateToOneWithWhereWithoutBookingsInput {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutBookingsInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutBookingsInput;
}
