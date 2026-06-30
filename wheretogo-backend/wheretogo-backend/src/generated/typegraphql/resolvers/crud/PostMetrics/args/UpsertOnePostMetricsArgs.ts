import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMetricsCreateInput } from "../../../inputs/PostMetricsCreateInput";
import { PostMetricsUpdateInput } from "../../../inputs/PostMetricsUpdateInput";
import { PostMetricsWhereUniqueInput } from "../../../inputs/PostMetricsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePostMetricsArgs {
  @TypeGraphQL.Field(_type => PostMetricsWhereUniqueInput, {
    nullable: false
  })
  where!: PostMetricsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostMetricsCreateInput, {
    nullable: false
  })
  create!: PostMetricsCreateInput;

  @TypeGraphQL.Field(_type => PostMetricsUpdateInput, {
    nullable: false
  })
  update!: PostMetricsUpdateInput;
}
