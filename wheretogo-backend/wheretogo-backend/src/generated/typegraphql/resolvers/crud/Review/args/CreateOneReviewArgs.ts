import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewCreateInput } from "../../../inputs/ReviewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneReviewArgs {
  @TypeGraphQL.Field(_type => ReviewCreateInput, {
    nullable: false
  })
  data!: ReviewCreateInput;
}
