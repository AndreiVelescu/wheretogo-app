import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateWithoutLocationInput } from "../inputs/ReviewCreateWithoutLocationInput";
import { ReviewUpdateWithoutLocationInput } from "../inputs/ReviewUpdateWithoutLocationInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewUpsertWithWhereUniqueWithoutLocationInput", {})
export class ReviewUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: ReviewUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => ReviewCreateWithoutLocationInput, {
    nullable: false
  })
  create!: ReviewCreateWithoutLocationInput;
}
