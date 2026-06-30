import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutCollectionsInput } from "../inputs/PostCreateWithoutCollectionsInput";
import { PostUpdateWithoutCollectionsInput } from "../inputs/PostUpdateWithoutCollectionsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutCollectionsInput", {})
export class PostUpsertWithoutCollectionsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutCollectionsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutCollectionsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutCollectionsInput, {
    nullable: false
  })
  create!: PostCreateWithoutCollectionsInput;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;
}
