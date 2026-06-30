import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionCreateInput } from "../../../inputs/PostCollectionCreateInput";
import { PostCollectionUpdateInput } from "../../../inputs/PostCollectionUpdateInput";
import { PostCollectionWhereUniqueInput } from "../../../inputs/PostCollectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePostCollectionArgs {
  @TypeGraphQL.Field(_type => PostCollectionWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCollectionCreateInput, {
    nullable: false
  })
  create!: PostCollectionCreateInput;

  @TypeGraphQL.Field(_type => PostCollectionUpdateInput, {
    nullable: false
  })
  update!: PostCollectionUpdateInput;
}
