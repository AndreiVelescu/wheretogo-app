import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostShareWhereUniqueInput } from "../../../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePostShareArgs {
  @TypeGraphQL.Field(_type => PostShareWhereUniqueInput, {
    nullable: false
  })
  where!: PostShareWhereUniqueInput;
}
