import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateNestedOneWithoutReviewsInput } from "../inputs/LocationCreateNestedOneWithoutReviewsInput";

@TypeGraphQL.InputType("ReviewCreateWithoutUserInput", {})
export class ReviewCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  rating!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  comment!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  likes?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutReviewsInput, {
    nullable: false
  })
  location!: LocationCreateNestedOneWithoutReviewsInput;
}
