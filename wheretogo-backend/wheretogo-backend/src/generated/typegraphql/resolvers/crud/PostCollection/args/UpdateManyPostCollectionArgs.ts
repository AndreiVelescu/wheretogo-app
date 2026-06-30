import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionUpdateManyMutationInput } from "../../../inputs/PostCollectionUpdateManyMutationInput";
import { PostCollectionWhereInput } from "../../../inputs/PostCollectionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostCollectionArgs {
  @TypeGraphQL.Field(_type => PostCollectionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostCollectionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostCollectionWhereInput, {
    nullable: true
  })
  where?: PostCollectionWhereInput | undefined;
}
