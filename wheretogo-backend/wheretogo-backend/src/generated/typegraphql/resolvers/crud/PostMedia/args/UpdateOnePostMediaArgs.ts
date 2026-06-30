import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMediaUpdateInput } from "../../../inputs/PostMediaUpdateInput";
import { PostMediaWhereUniqueInput } from "../../../inputs/PostMediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePostMediaArgs {
  @TypeGraphQL.Field(_type => PostMediaUpdateInput, {
    nullable: false
  })
  data!: PostMediaUpdateInput;

  @TypeGraphQL.Field(_type => PostMediaWhereUniqueInput, {
    nullable: false
  })
  where!: PostMediaWhereUniqueInput;
}
