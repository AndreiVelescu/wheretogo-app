import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMediaWhereUniqueInput } from "../../../inputs/PostMediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePostMediaArgs {
  @TypeGraphQL.Field(_type => PostMediaWhereUniqueInput, {
    nullable: false
  })
  where!: PostMediaWhereUniqueInput;
}
