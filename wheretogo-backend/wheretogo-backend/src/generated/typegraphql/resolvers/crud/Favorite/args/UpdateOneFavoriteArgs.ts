import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavoriteUpdateInput } from "../../../inputs/FavoriteUpdateInput";
import { FavoriteWhereUniqueInput } from "../../../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFavoriteArgs {
  @TypeGraphQL.Field(_type => FavoriteUpdateInput, {
    nullable: false
  })
  data!: FavoriteUpdateInput;

  @TypeGraphQL.Field(_type => FavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavoriteWhereUniqueInput;
}
