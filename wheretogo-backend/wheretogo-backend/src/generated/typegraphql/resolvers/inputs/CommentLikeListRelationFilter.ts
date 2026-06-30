import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeWhereInput } from "../inputs/CommentLikeWhereInput";

@TypeGraphQL.InputType("CommentLikeListRelationFilter", {})
export class CommentLikeListRelationFilter {
  @TypeGraphQL.Field(_type => CommentLikeWhereInput, {
    nullable: true
  })
  every?: CommentLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeWhereInput, {
    nullable: true
  })
  some?: CommentLikeWhereInput | undefined;

  @TypeGraphQL.Field(_type => CommentLikeWhereInput, {
    nullable: true
  })
  none?: CommentLikeWhereInput | undefined;
}
