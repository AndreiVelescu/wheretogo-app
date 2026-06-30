import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavoriteOrderByWithAggregationInput } from "../../../inputs/FavoriteOrderByWithAggregationInput";
import { FavoriteScalarWhereWithAggregatesInput } from "../../../inputs/FavoriteScalarWhereWithAggregatesInput";
import { FavoriteWhereInput } from "../../../inputs/FavoriteWhereInput";
import { FavoriteScalarFieldEnum } from "../../../../enums/FavoriteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFavoriteArgs {
  @TypeGraphQL.Field(_type => FavoriteWhereInput, {
    nullable: true
  })
  where?: FavoriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FavoriteOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FavoriteOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "locationId" | "createdAt">;

  @TypeGraphQL.Field(_type => FavoriteScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FavoriteScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
