import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavedPostUpdateInput } from "../../../inputs/SavedPostUpdateInput";
import { SavedPostWhereUniqueInput } from "../../../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSavedPostArgs {
  @TypeGraphQL.Field(_type => SavedPostUpdateInput, {
    nullable: false
  })
  data!: SavedPostUpdateInput;

  @TypeGraphQL.Field(_type => SavedPostWhereUniqueInput, {
    nullable: false
  })
  where!: SavedPostWhereUniqueInput;
}
