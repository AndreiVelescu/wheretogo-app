import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavedPostUpdateManyMutationInput } from "../../../inputs/SavedPostUpdateManyMutationInput";
import { SavedPostWhereInput } from "../../../inputs/SavedPostWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySavedPostArgs {
  @TypeGraphQL.Field(_type => SavedPostUpdateManyMutationInput, {
    nullable: false
  })
  data!: SavedPostUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SavedPostWhereInput, {
    nullable: true
  })
  where?: SavedPostWhereInput | undefined;
}
