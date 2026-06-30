import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostLikeCreateInput } from "../../../inputs/PostLikeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostLikeArgs {
  @TypeGraphQL.Field(_type => PostLikeCreateInput, {
    nullable: false
  })
  data!: PostLikeCreateInput;
}
