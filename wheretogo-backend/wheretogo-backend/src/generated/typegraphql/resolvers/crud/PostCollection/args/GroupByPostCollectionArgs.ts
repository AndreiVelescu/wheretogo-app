import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionOrderByWithAggregationInput } from "../../../inputs/PostCollectionOrderByWithAggregationInput";
import { PostCollectionScalarWhereWithAggregatesInput } from "../../../inputs/PostCollectionScalarWhereWithAggregatesInput";
import { PostCollectionWhereInput } from "../../../inputs/PostCollectionWhereInput";
import { PostCollectionScalarFieldEnum } from "../../../../enums/PostCollectionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostCollectionArgs {
  @TypeGraphQL.Field(_type => PostCollectionWhereInput, {
    nullable: true
  })
  where?: PostCollectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostCollectionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "name" | "description" | "isPublic" | "coverImage" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => PostCollectionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostCollectionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
