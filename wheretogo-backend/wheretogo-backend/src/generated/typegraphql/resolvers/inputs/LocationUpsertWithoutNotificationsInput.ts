import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutNotificationsInput } from "../inputs/LocationCreateWithoutNotificationsInput";
import { LocationUpdateWithoutNotificationsInput } from "../inputs/LocationUpdateWithoutNotificationsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpsertWithoutNotificationsInput", {})
export class LocationUpsertWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutNotificationsInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: LocationCreateWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
