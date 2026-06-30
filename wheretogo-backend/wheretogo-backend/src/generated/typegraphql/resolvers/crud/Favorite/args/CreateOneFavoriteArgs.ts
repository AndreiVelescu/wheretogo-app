import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavoriteCreateInput } from "../../../inputs/FavoriteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFavoriteArgs {
  @TypeGraphQL.Field(_type => FavoriteCreateInput, {
    nullable: false
  })
  data!: FavoriteCreateInput;
}
