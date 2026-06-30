import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostLikeWhereInput } from "../../../inputs/PostLikeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPostLikeArgs {
  @TypeGraphQL.Field(_type => PostLikeWhereInput, {
    nullable: true
  })
  where?: PostLikeWhereInput | undefined;
}
