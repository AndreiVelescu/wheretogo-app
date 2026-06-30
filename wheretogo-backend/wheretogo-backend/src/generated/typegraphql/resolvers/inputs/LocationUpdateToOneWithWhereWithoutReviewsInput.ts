import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutReviewsInput } from "../inputs/LocationUpdateWithoutReviewsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpdateToOneWithWhereWithoutReviewsInput", {})
export class LocationUpdateToOneWithWhereWithoutReviewsInput {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutReviewsInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutReviewsInput;
}
