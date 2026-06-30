import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostReportOrderByWithRelationInput } from "../../../inputs/PostReportOrderByWithRelationInput";
import { PostReportWhereInput } from "../../../inputs/PostReportWhereInput";
import { PostReportWhereUniqueInput } from "../../../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePostReportArgs {
  @TypeGraphQL.Field(_type => PostReportWhereInput, {
    nullable: true
  })
  where?: PostReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostReportOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PostReportOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostReportWhereUniqueInput, {
    nullable: true
  })
  cursor?: PostReportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
