import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutOwnerInput } from "../inputs/TripCreateWithoutOwnerInput";
import { TripUpdateWithoutOwnerInput } from "../inputs/TripUpdateWithoutOwnerInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpsertWithWhereUniqueWithoutOwnerInput", {})
export class TripUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: TripUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: TripCreateWithoutOwnerInput;
}
