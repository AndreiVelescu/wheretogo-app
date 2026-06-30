import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentUpdateWithoutRepliesInput } from "../inputs/PostCommentUpdateWithoutRepliesInput";
import { PostCommentWhereInput } from "../inputs/PostCommentWhereInput";

@TypeGraphQL.InputType("PostCommentUpdateToOneWithWhereWithoutRepliesInput", {})
export class PostCommentUpdateToOneWithWhereWithoutRepliesInput {
  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  where?: PostCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentUpdateWithoutRepliesInput, {
    nullable: false
  })
  data!: PostCommentUpdateWithoutRepliesInput;
}
