import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavedPostCreateInput } from "../../../inputs/SavedPostCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSavedPostArgs {
  @TypeGraphQL.Field(_type => SavedPostCreateInput, {
    nullable: false
  })
  data!: SavedPostCreateInput;
}
