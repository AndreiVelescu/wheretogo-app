import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMetricsOrderByWithRelationInput } from "../../../inputs/PostMetricsOrderByWithRelationInput";
import { PostMetricsWhereInput } from "../../../inputs/PostMetricsWhereInput";
import { PostMetricsWhereUniqueInput } from "../../../inputs/PostMetricsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePostMetricsArgs {
  @TypeGraphQL.Field(_type => PostMetricsWhereInput, {
    nullable: true
  })
  where?: PostMetricsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostMetricsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostMetricsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostMetricsWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostMetricsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
