import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentCreateOrConnectWithoutRepliesInput } from "../inputs/PostCommentCreateOrConnectWithoutRepliesInput";
import { PostCommentCreateWithoutRepliesInput } from "../inputs/PostCommentCreateWithoutRepliesInput";
import { PostCommentWhereUniqueInput } from "../inputs/PostCommentWhereUniqueInput";

@TypeGraphQL.InputType("PostCommentCreateNestedOneWithoutRepliesInput", {})
export class PostCommentCreateNestedOneWithoutRepliesInput {
  @TypeGraphQL.Field(_type => PostCommentCreateWithoutRepliesInput, {
    nullable: true
  })
  create?: PostCommentCreateWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentCreateOrConnectWithoutRepliesInput, {
    nullable: true
  })
  connectOrCreate?: PostCommentCreateOrConnectWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentWhereUniqueInput, {
    nullable: true
  })
  connect?: PostCommentWhereUniqueInput | undefined;
}
