import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostLikeWhereUniqueInput } from "../../../inputs/PostLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePostLikeOrThrowArgs {
  @TypeGraphQL.Field(_type => PostLikeWhereUniqueInput, {
    nullable: false
  })
  where!: PostLikeWhereUniqueInput;
}
