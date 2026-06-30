import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripUpdateWithoutOwnerInput } from "../inputs/TripUpdateWithoutOwnerInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateWithWhereUniqueWithoutOwnerInput", {})
export class TripUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: false
  })
  where!: TripWhereUniqueInput;

  @TypeGraphQL.Field(_type => TripUpdateWithoutOwnerInput, {
    nullable: false
  })
  data!: TripUpdateWithoutOwnerInput;
}
