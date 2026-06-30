import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavedPostCreateManyInput } from "../../../inputs/SavedPostCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySavedPostArgs {
  @TypeGraphQL.Field(_type => [SavedPostCreateManyInput], {
    nullable: false
  })
  data!: SavedPostCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
