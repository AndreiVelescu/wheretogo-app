import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutNotificationsInput } from "../inputs/TripCreateWithoutNotificationsInput";
import { TripUpdateWithoutNotificationsInput } from "../inputs/TripUpdateWithoutNotificationsInput";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripUpsertWithoutNotificationsInput", {})
export class TripUpsertWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => TripUpdateWithoutNotificationsInput, {
    nullable: false
  })
  update!: TripUpdateWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: TripCreateWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;
}
