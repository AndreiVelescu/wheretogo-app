import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionCreateWithoutPostsInput } from "../inputs/PostCollectionCreateWithoutPostsInput";
import { PostCollectionUpdateWithoutPostsInput } from "../inputs/PostCollectionUpdateWithoutPostsInput";
import { PostCollectionWhereInput } from "../inputs/PostCollectionWhereInput";

@TypeGraphQL.InputType("PostCollectionUpsertWithoutPostsInput", {})
export class PostCollectionUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => PostCollectionUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: PostCollectionUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => PostCollectionCreateWithoutPostsInput, {
    nullable: false
  })
  create!: PostCollectionCreateWithoutPostsInput;

  @TypeGraphQL.Field(_type => PostCollectionWhereInput, {
    nullable: true
  })
  where?: PostCollectionWhereInput | undefined;
}
