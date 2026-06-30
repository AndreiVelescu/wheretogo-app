import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentLikeCreateManyInput } from "../../../inputs/CommentLikeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCommentLikeArgs {
  @TypeGraphQL.Field(_type => [CommentLikeCreateManyInput], {
    nullable: false
  })
  data!: CommentLikeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
