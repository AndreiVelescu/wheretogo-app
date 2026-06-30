import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentLikeCreateWithoutUserInput } from "../inputs/CommentLikeCreateWithoutUserInput";
import { CommentLikeUpdateWithoutUserInput } from "../inputs/CommentLikeUpdateWithoutUserInput";
import { CommentLikeWhereUniqueInput } from "../inputs/CommentLikeWhereUniqueInput";

@TypeGraphQL.InputType("CommentLikeUpsertWithWhereUniqueWithoutUserInput", {})
export class CommentLikeUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => CommentLikeWhereUniqueInput, {
    nullable: false
  })
  where!: CommentLikeWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentLikeUpdateWithoutUserInput, {
    nullable: false
  })
  update!: CommentLikeUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => CommentLikeCreateWithoutUserInput, {
    nullable: false
  })
  create!: CommentLikeCreateWithoutUserInput;
}
