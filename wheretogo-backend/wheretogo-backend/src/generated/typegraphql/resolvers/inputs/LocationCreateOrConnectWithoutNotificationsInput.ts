import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutNotificationsInput } from "../inputs/LocationCreateWithoutNotificationsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateOrConnectWithoutNotificationsInput", {})
export class LocationCreateOrConnectWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: false
  })
  where!: LocationWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: LocationCreateWithoutNotificationsInput;
}
