import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostReportUpdateManyMutationInput } from "../../../inputs/PostReportUpdateManyMutationInput";
import { PostReportWhereInput } from "../../../inputs/PostReportWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostReportArgs {
  @TypeGraphQL.Field(_type => PostReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostReportUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostReportWhereInput, {
    nullable: true
  })
  where?: PostReportWhereInput | undefined;
}
