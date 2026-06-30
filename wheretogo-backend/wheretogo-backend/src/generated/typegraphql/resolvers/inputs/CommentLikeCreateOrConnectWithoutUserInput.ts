import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeCreateWithoutUserInput } from "../inputs/CommentLikeCreateWithoutUserInput";
import { CommentLikeWhereUniqueInput } from "../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.InputType("CommentLikeCreateOrConnectWithoutUserInput", {})
export class CommentLikeCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentLikeWhereUniqueInput, {
    nullable: false
  })
  where!: CommentLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: CommentLikeCreateWithoutUserInput;
}
