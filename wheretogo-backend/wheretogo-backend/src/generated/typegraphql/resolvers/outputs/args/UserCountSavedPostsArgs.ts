import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavedPostWhereInput } from "../../inputs/SavedPostWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountSavedPostsArgs {
  @TypeGraphQL.Field(_type => SavedPostWhereInput, {
    nullable: true
  })
  where?: SavedPostWhereInput | undefined;
}
