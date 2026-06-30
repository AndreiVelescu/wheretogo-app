import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostReportCreateInput } from "../../../inputs/PostReportCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostReportArgs {
  @TypeGraphQL.Field(_type => PostReportCreateInput, {
    nullable: false
  })
  data!: PostReportCreateInput;
}
