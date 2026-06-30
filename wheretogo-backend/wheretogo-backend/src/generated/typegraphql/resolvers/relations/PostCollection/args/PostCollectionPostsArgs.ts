import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCollectionItemOrderByWithRelationInput } from "../../../inputs/PostCollectionItemOrderByWithRelationInput";
import { PostCollectionItemWhereInput } from "../../../inputs/PostCollectionItemWhereInput";
import { PostCollectionItemWhereUniqueInput } from "../../../inputs/PostCollectionItemWhereUniqueInput";
import { PostCollectionItemScalarFieldEnum } from "../../../../enums/PostCollectionItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PostCollectionPostsArgs {
  @TypeGraphQL.Field(_type => PostCollectionItemWhereInput, {
    nullable: true
  })
  where?: PostCollectionItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostCollectionItemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostCollectionItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "collectionId" | "postId" | "order" | "note" | "addedAt"> | undefined;
}
