import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMediaOrderByWithAggregationInput } from "../../../inputs/PostMediaOrderByWithAggregationInput";
import { PostMediaScalarWhereWithAggregatesInput } from "../../../inputs/PostMediaScalarWhereWithAggregatesInput";
import { PostMediaWhereInput } from "../../../inputs/PostMediaWhereInput";
import { PostMediaScalarFieldEnum } from "../../../../enums/PostMediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostMediaArgs {
  @TypeGraphQL.Field(_type => PostMediaWhereInput, {
    nullable: true
  })
  where?: PostMediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostMediaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostMediaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMediaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "postId" | "type" | "url" | "thumbnail" | "order" | "width" | "height" | "duration" | "createdAt">;

  @TypeGraphQL.Field(_type => PostMediaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostMediaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
