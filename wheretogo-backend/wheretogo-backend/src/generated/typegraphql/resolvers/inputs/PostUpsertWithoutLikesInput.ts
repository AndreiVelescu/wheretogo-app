import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutLikesInput } from "../inputs/PostCreateWithoutLikesInput";
import { PostUpdateWithoutLikesInput } from "../inputs/PostUpdateWithoutLikesInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutLikesInput", {})
export class PostUpsertWithoutLikesInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutLikesInput, {
    nullable: false
  })
  update!: PostUpdateWithoutLikesInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutLikesInput, {
    nullable: false
  })
  create!: PostCreateWithoutLikesInput;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;
}
