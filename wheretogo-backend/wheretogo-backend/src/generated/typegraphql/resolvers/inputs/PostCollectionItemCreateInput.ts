import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionCreateNestedOneWithoutPostsInput } from "../inputs/PostCollectionCreateNestedOneWithoutPostsInput";
import { PostCreateNestedOneWithoutCollectionsInput } from "../inputs/PostCreateNestedOneWithoutCollectionsInput";

@TypeGraphQL.InputType("PostCollectionItemCreateInput", {})
export class PostCollectionItemCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  note?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  addedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PostCollectionCreateNestedOneWithoutPostsInput, {
    nullable: false
  })
  collection!: PostCollectionCreateNestedOneWithoutPostsInput;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCollectionsInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutCollectionsInput;
}
