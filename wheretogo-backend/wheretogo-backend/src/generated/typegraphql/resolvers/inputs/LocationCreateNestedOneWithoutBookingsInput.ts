import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutBookingsInput } from "../inputs/LocationCreateOrConnectWithoutBookingsInput";
import { LocationCreateWithoutBookingsInput } from "../inputs/LocationCreateWithoutBookingsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedOneWithoutBookingsInput", {})
export class LocationCreateNestedOneWithoutBookingsInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutBookingsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutBookingsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutBookingsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutBookingsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;
}
