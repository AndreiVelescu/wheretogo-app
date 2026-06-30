import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateWithoutLocationInput } from "../inputs/ReviewCreateWithoutLocationInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewCreateOrConnectWithoutLocationInput", {})
export class ReviewCreateOrConnectWithoutLocationInput {
  @TypeGraphQL.Field(_type => ReviewWhereUniqueInput, {
    nullable: false
  })
  where!: ReviewWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReviewCreateWithoutLocationInput, {
    nullable: false
  })
  create!: ReviewCreateWithoutLocationInput;
}
