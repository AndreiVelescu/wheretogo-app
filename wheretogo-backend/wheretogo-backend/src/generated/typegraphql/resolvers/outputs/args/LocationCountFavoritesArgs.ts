import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavoriteWhereInput } from "../../inputs/FavoriteWhereInput";

@TypeGraphQL.ArgsType()
export class LocationCountFavoritesArgs {
  @TypeGraphQL.Field(_type => FavoriteWhereInput, {
    nullable: true
  })
  where?: FavoriteWhereInput | undefined;
}
