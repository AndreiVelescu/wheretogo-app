import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutDaysInput } from "../inputs/TripCreateWithoutDaysInput";
import { TripUpdateWithoutDaysInput } from "../inputs/TripUpdateWithoutDaysInput";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripUpsertWithoutDaysInput", {})
export class TripUpsertWithoutDaysInput {
  @TypeGraphQL.Field(_type => TripUpdateWithoutDaysInput, {
    nullable: false
  })
  update!: TripUpdateWithoutDaysInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutDaysInput, {
    nullable: false
  })
  create!: TripCreateWithoutDaysInput;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;
}
