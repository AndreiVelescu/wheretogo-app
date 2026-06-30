import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutNotificationsInput } from "../inputs/LocationUpdateWithoutNotificationsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpdateToOneWithWhereWithoutNotificationsInput", {})
export class LocationUpdateToOneWithWhereWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutNotificationsInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutNotificationsInput;
}
