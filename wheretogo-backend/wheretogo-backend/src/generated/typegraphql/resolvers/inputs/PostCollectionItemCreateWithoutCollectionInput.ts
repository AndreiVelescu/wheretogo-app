import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutCollectionsInput } from "../inputs/PostCreateNestedOneWithoutCollectionsInput";

@TypeGraphQL.InputType("PostCollectionItemCreateWithoutCollectionInput", {})
export class PostCollectionItemCreateWithoutCollectionInput {
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

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutCollectionsInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutCollectionsInput;
}
