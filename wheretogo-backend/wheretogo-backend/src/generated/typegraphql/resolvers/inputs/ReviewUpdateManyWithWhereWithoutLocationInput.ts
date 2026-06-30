import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyMutationInput } from "../inputs/ReviewUpdateManyMutationInput";

@TypeGraphQL.InputType("ReviewUpdateManyWithWhereWithoutLocationInput", {})
export class ReviewUpdateManyWithWhereWithoutLocationInput {
  @TypeGraphQL.Field(_type => ReviewScalarWhereInput, {
    nullable: false
  })
  where!: ReviewScalarWhereInput;

  @TypeGraphQL.Field(_type => ReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReviewUpdateManyMutationInput;
}
