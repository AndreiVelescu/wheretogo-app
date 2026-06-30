import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionItemUpdateManyMutationInput } from "../../../inputs/PostCollectionItemUpdateManyMutationInput";
import { PostCollectionItemWhereInput } from "../../../inputs/PostCollectionItemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostCollectionItemArgs {
  @TypeGraphQL.Field(_type => PostCollectionItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostCollectionItemUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostCollectionItemWhereInput, {
    nullable: true
  })
  where?: PostCollectionItemWhereInput | undefined;
}
