import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripUpdateWithoutNotificationsInput } from "../inputs/TripUpdateWithoutNotificationsInput";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripUpdateToOneWithWhereWithoutNotificationsInput", {})
export class TripUpdateToOneWithWhereWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateWithoutNotificationsInput, {
    nullable: false
  })
  data!: TripUpdateWithoutNotificationsInput;
}
