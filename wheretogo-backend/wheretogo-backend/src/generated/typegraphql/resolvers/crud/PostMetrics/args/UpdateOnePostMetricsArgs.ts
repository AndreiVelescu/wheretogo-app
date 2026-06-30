import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMetricsUpdateInput } from "../../../inputs/PostMetricsUpdateInput";
import { PostMetricsWhereUniqueInput } from "../../../inputs/PostMetricsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePostMetricsArgs {
  @TypeGraphQL.Field(_type => PostMetricsUpdateInput, {
    nullable: false
  })
  data!: PostMetricsUpdateInput;

  @TypeGraphQL.Field(_type => PostMetricsWhereUniqueInput, {
    nullable: false
  })
  where!: PostMetricsWhereUniqueInput;
}
