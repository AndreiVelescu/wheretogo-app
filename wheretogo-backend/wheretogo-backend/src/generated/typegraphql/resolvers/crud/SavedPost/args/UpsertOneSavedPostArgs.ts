import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavedPostCreateInput } from "../../../inputs/SavedPostCreateInput";
import { SavedPostUpdateInput } from "../../../inputs/SavedPostUpdateInput";
import { SavedPostWhereUniqueInput } from "../../../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSavedPostArgs {
  @TypeGraphQL.Field(_type => SavedPostWhereUniqueInput, {
    nullable: false
  })
  where!: SavedPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => SavedPostCreateInput, {
    nullable: false
  })
  create!: SavedPostCreateInput;

  @TypeGraphQL.Field(_type => SavedPostUpdateInput, {
    nullable: false
  })
  update!: SavedPostUpdateInput;
}
