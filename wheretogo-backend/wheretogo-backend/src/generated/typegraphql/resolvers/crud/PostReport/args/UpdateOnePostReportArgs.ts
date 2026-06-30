import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostReportUpdateInput } from "../../../inputs/PostReportUpdateInput";
import { PostReportWhereUniqueInput } from "../../../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePostReportArgs {
  @TypeGraphQL.Field(_type => PostReportUpdateInput, {
    nullable: false
  })
  data!: PostReportUpdateInput;

  @TypeGraphQL.Field(_type => PostReportWhereUniqueInput, {
    nullable: false
  })
  where!: PostReportWhereUniqueInput;
}
