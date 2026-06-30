import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeUpdateWithoutUserInput } from "../inputs/CommentLikeUpdateWithoutUserInput";
import { CommentLikeWhereUniqueInput } from "../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.InputType("CommentLikeUpdateWithWhereUniqueWithoutUserInput", {})
export class CommentLikeUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentLikeWhereUniqueInput, {
    nullable: false
  })
  where!: CommentLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentLikeUpdateWithoutUserInput, {
    nullable: false
  })
  data!: CommentLikeUpdateWithoutUserInput;
}
