import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionItemOrderByWithAggregationInput } from "../../../inputs/PostCollectionItemOrderByWithAggregationInput";
import { PostCollectionItemScalarWhereWithAggregatesInput } from "../../../inputs/PostCollectionItemScalarWhereWithAggregatesInput";
import { PostCollectionItemWhereInput } from "../../../inputs/PostCollectionItemWhereInput";
import { PostCollectionItemScalarFieldEnum } from "../../../../enums/PostCollectionItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostCollectionItemArgs {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereInput, {
    nullable: true
  })
  where?: PostCollectionItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostCollectionItemOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "collectionId" | "postId" | "order" | "note" | "addedAt">;

  @TypeGraphQL.Field(_type => PostCollectionItemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostCollectionItemScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
