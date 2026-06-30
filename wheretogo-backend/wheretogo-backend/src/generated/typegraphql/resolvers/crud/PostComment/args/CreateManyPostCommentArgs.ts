import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCommentCreateManyInput } from "../../../inputs/PostCommentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPostCommentArgs {
  @TypeGraphQL.Field(_type => [PostCommentCreateManyInput], {
    nullable: false
  })
  data!: PostCommentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
