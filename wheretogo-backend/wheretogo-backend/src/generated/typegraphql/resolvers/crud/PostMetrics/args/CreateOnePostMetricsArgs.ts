import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMetricsCreateInput } from "../../../inputs/PostMetricsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostMetricsArgs {
  @TypeGraphQL.Field(_type => PostMetricsCreateInput, {
    nullable: false
  })
  data!: PostMetricsCreateInput;
}
