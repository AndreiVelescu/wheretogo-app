import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostReportCreateManyInput } from "../../../inputs/PostReportCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPostReportArgs {
  @TypeGraphQL.Field(_type => [PostReportCreateManyInput], {
    nullable: false
  })
  data!: PostReportCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
