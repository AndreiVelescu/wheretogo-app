import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostReportOrderByWithAggregationInput } from "../../../inputs/PostReportOrderByWithAggregationInput";
import { PostReportScalarWhereWithAggregatesInput } from "../../../inputs/PostReportScalarWhereWithAggregatesInput";
import { PostReportWhereInput } from "../../../inputs/PostReportWhereInput";
import { PostReportScalarFieldEnum } from "../../../../enums/PostReportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostReportArgs {
  @TypeGraphQL.Field(_type => PostReportWhereInput, {
    nullable: true
  })
  where?: PostReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostReportOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostReportOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "reporterId" | "postId" | "reason" | "details" | "status" | "reviewedAt" | "createdAt">;

  @TypeGraphQL.Field(_type => PostReportScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostReportScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
