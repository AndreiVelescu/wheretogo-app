import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMetricsWhereInput } from "../../../inputs/PostMetricsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPostMetricsArgs {
  @TypeGraphQL.Field(_type => PostMetricsWhereInput, {
    nullable: true
  })
  where?: PostMetricsWhereInput | undefined;
}
