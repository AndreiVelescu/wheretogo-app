import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostReportWhereUniqueInput } from "../../../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePostReportArgs {
  @TypeGraphQL.Field(_type => PostReportWhereUniqueInput, {
    nullable: false
  })
  where!: PostReportWhereUniqueInput;
}
