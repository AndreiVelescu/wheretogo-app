import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentWhereInput } from "../inputs/PostCommentWhereInput";

@TypeGraphQL.InputType("PostCommentListRelationFilter", {})
export class PostCommentListRelationFilter {
  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  every?: PostCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  some?: PostCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  none?: PostCommentWhereInput | undefined;
}
