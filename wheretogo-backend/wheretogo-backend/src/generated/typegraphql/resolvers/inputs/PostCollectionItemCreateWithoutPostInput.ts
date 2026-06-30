import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionCreateNestedOneWithoutPostsInput } from "../inputs/PostCollectionCreateNestedOneWithoutPostsInput";

@TypeGraphQL.InputType("PostCollectionItemCreateWithoutPostInput", {})
export class PostCollectionItemCreateWithoutPostInput {
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
}
