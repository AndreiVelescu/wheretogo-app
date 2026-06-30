import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateOrConnectWithoutLikesInput } from "../inputs/PostCommentCreateOrConnectWithoutLikesInput";
import { PostCommentCreateWithoutLikesInput } from "../inputs/PostCommentCreateWithoutLikesInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentCreateNestedOneWithoutLikesInput", {})
export class PostCommentCreateNestedOneWithoutLikesInput {
  @TypeGraphQL.Field(_type => PostCommentCreateWithoutLikesInput, {
    nullable: true
  })
  create?: PostCommentCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput | undefined;
}
