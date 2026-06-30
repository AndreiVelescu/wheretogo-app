import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutReviewsInput } from "../inputs/LocationCreateWithoutReviewsInput";
import { LocationUpdateWithoutReviewsInput } from "../inputs/LocationUpdateWithoutReviewsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpsertWithoutReviewsInput", {})
export class LocationUpsertWithoutReviewsInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutReviewsInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutReviewsInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutReviewsInput, {
    nullable: false
  })
  create!: LocationCreateWithoutReviewsInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
