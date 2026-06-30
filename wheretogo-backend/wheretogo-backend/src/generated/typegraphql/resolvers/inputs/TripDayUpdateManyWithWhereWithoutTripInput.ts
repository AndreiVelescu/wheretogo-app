import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripDayScalarWhereInput } from "../inputs/TripDayScalarWhereInput";
import { TripDayUpdateManyMutationInput } from "../inputs/TripDayUpdateManyMutationInput";

@TypeGraphQL.InputType("TripDayUpdateManyWithWhereWithoutTripInput", {})
export class TripDayUpdateManyWithWhereWithoutTripInput {
  @TypeGraphQL.Field(_type => TripDayScalarWhereInput, {
    nullable: false
  })
  where!: TripDayScalarWhereInput;

  @TypeGraphQL.Field(_type => TripDayUpdateManyMutationInput, {
    nullable: false
  })
  data!: TripDayUpdateManyMutationInput;
}
