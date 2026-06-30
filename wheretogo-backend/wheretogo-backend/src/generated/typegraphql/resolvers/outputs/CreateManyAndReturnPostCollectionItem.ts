import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Post } from "../../models/Post";
import { PostCollection } from "../../models/PostCollection";

@TypeGraphQL.ObjectType("CreateManyAndReturnPostCollectionItem", {
  simpleResolvers: true
})
export class CreateManyAndReturnPostCollectionItem {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  collectionId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  postId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  note!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  addedAt!: Date;

  @TypeGraphQL.Field(_type => PostCollection, {
    nullable: false
  })
  collection!: PostCollection;

  @TypeGraphQL.Field(_type => Post, {
    nullable: false
  })
  post!: Post;
}
