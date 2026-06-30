import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutEventsInput } from "../inputs/LocationCreateWithoutEventsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateOrConnectWithoutEventsInput", {})
export class LocationCreateOrConnectWithoutEventsInput {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutEventsInput, {
    nullable: false
  })
  create!: LocationCreateWithoutEventsInput;
}
