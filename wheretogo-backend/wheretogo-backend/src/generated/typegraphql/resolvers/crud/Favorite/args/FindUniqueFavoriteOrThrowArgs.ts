import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavoriteWhereUniqueInput } from "../../../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFavoriteOrThrowArgs {
  @TypeGraphQL.Field(_type => FavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavoriteWhereUniqueInput;
}
