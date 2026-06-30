import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewUpdateWithoutLocationInput } from "../inputs/ReviewUpdateWithoutLocationInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewUpdateWithWhereUniqueWithoutLocationInput", {})
export class ReviewUpdateWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutLocationInput, {
    nullable: false
  })
  data!: ReviewUpdateWithoutLocationInput;
}
