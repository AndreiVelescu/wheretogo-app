import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCommentWhereInput } from "../inputs/PostCommentWhereInput";

@TypeGraphQL.InputType("PostCommentRelationFilter", {})
export class PostCommentRelationFilter {
  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  is?: PostCommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  isNot?: PostCommentWhereInput | undefined;
}
