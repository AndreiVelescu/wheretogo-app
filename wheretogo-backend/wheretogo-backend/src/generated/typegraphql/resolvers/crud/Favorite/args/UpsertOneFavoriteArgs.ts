import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavoriteCreateInput } from "../../../inputs/FavoriteCreateInput";
import { FavoriteUpdateInput } from "../../../inputs/FavoriteUpdateInput";
import { FavoriteWhereUniqueInput } from "../../../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFavoriteArgs {
  @TypeGraphQL.Field(_type => FavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavoriteCreateInput, {
    nullable: false
  })
  create!: FavoriteCreateInput;

  @TypeGraphQL.Field(_type => FavoriteUpdateInput, {
    nullable: false
  })
  update!: FavoriteUpdateInput;
}
