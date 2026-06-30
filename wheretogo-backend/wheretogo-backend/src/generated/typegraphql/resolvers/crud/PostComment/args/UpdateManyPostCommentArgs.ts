import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCommentUpdateManyMutationInput } from "../../../inputs/PostCommentUpdateManyMutationInput";
import { PostCommentWhereInput } from "../../../inputs/PostCommentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostCommentArgs {
  @TypeGraphQL.Field(_type => PostCommentUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostCommentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostCommentWhereInput, {
    nullable: true
  })
  where?: PostCommentWhereInput | undefined;
}
