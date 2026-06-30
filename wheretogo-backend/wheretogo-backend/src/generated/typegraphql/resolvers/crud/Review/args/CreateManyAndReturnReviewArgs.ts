import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReviewCreateManyInput } from "../../../inputs/ReviewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnReviewArgs {
  @TypeGraphQL.Field(_type => [ReviewCreateManyInput], {
    nullable: false
  })
  data!: ReviewCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
