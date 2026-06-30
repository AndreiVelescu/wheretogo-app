import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionItemUpdateInput } from "../../../inputs/PostCollectionItemUpdateInput";
import { PostCollectionItemWhereUniqueInput } from "../../../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePostCollectionItemArgs {
  @TypeGraphQL.Field(_type => PostCollectionItemUpdateInput, {
    nullable: false
  })
  data!: PostCollectionItemUpdateInput;

  @TypeGraphQL.Field(_type => PostCollectionItemWhereUniqueInput, {
    nullable: false
  })
  where!: PostCollectionItemWhereUniqueInput;
}
