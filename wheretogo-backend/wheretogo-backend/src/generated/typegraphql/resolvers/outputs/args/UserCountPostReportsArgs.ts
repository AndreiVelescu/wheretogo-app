import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostReportWhereInput } from "../../inputs/PostReportWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountPostReportsArgs {
  @TypeGraphQL.Field(_type => PostReportWhereInput, {
    nullable: true
  })
  where?: PostReportWhereInput | undefined;
}
