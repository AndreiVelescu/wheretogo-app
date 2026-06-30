import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionItemCreateInput } from "../../../inputs/PostCollectionItemCreateInput";
import { PostCollectionItemUpdateInput } from "../../../inputs/PostCollectionItemUpdateInput";
import { PostCollectionItemWhereUniqueInput } from "../../../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePostCollectionItemArgs {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCollectionItemCreateInput, {
    nullable: false
  })
  create!: PostCollectionItemCreateInput;

  @TypeGraphQL.Field(_type => PostCollectionItemUpdateInput, {
    nullable: false
  })
  update!: PostCollectionItemUpdateInput;
}
