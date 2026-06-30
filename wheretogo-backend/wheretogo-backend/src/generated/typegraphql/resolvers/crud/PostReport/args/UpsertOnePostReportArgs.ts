import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostReportCreateInput } from "../../../inputs/PostReportCreateInput";
import { PostReportUpdateInput } from "../../../inputs/PostReportUpdateInput";
import { PostReportWhereUniqueInput } from "../../../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePostReportArgs {
  @TypeGraphQL.Field(_type => PostReportWhereUniqueInput, {
    nullable: false
  })
  where!: PostReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostReportCreateInput, {
    nullable: false
  })
  create!: PostReportCreateInput;

  @TypeGraphQL.Field(_type => PostReportUpdateInput, {
    nullable: false
  })
  update!: PostReportUpdateInput;
}
