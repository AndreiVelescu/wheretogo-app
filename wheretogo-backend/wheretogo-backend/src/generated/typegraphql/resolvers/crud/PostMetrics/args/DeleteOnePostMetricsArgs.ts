import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMetricsWhereUniqueInput } from "../../../inputs/PostMetricsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePostMetricsArgs {
  @TypeGraphQL.Field(_type => PostMetricsWhereUniqueInput, {
    nullable: false
  })
  where!: PostMetricsWhereUniqueInput;
}
