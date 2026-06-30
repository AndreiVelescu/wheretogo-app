import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMetricsUpdateManyMutationInput } from "../../../inputs/PostMetricsUpdateManyMutationInput";
import { PostMetricsWhereInput } from "../../../inputs/PostMetricsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostMetricsArgs {
  @TypeGraphQL.Field(_type => PostMetricsUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostMetricsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostMetricsWhereInput, {
    nullable: true
  })
  where?: PostMetricsWhereInput | undefined;
}
