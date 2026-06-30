import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavedPostWhereUniqueInput } from "../../../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSavedPostArgs {
  @TypeGraphQL.Field(_type => SavedPostWhereUniqueInput, {
    nullable: false
  })
  where!: SavedPostWhereUniqueInput;
}
