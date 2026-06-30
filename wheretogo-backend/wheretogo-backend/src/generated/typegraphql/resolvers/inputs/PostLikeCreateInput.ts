import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateNestedOneWithoutLikesInput } from "../inputs/PostCreateNestedOneWithoutLikesInput";
import { UserCreateNestedOneWithoutPostLikesInput } from "../inputs/UserCreateNestedOneWithoutPostLikesInput";

@TypeGraphQL.InputType("PostLikeCreateInput", {})
export class PostLikeCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostLikesInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutPostLikesInput;

  @TypeGraphQL.Field(_type => PostCreateNestedOneWithoutLikesInput, {
    nullable: false
  })
  post!: PostCreateNestedOneWithoutLikesInput;
}
