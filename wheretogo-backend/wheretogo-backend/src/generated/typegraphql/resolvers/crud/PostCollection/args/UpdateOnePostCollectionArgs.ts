import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionUpdateInput } from "../../../inputs/PostCollectionUpdateInput";
import { PostCollectionWhereUniqueInput } from "../../../inputs/PostCollectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePostCollectionArgs {
  @TypeGraphQL.Field(_type => PostCollectionUpdateInput, {
    nullable: false
  })
  data!: PostCollectionUpdateInput;

  @TypeGraphQL.Field(_type => PostCollectionWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionWhereUniqueInput;
}
