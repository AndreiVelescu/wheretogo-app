import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateWithoutRepliesInput } from "../inputs/PostCommentCreateWithoutRepliesInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentCreateOrConnectWithoutRepliesInput", {})
export class PostCommentCreateOrConnectWithoutRepliesInput {
  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: false
  })
  where!: PostCommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostCommentCreateWithoutRepliesInput, {
    nullable: false
  })
  create!: PostCommentCreateWithoutRepliesInput;
}
