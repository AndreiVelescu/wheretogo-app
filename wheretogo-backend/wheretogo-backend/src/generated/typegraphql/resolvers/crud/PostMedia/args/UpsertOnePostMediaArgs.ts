import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMediaCreateInput } from "../../../inputs/PostMediaCreateInput";
import { PostMediaUpdateInput } from "../../../inputs/PostMediaUpdateInput";
import { PostMediaWhereUniqueInput } from "../../../inputs/PostMediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePostMediaArgs {
  @TypeGraphQL.Field(_type => PostMediaWhereUniqueInput, {
    nullable: false
  })
  where!: PostMediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostMediaCreateInput, {
    nullable: false
  })
  create!: PostMediaCreateInput;

  @TypeGraphQL.Field(_type => PostMediaUpdateInput, {
    nullable: false
  })
  update!: PostMediaUpdateInput;
}
