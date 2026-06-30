import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostReportOrderByWithRelationInput } from "../../../inputs/PostReportOrderByWithRelationInput";
import { PostReportWhereInput } from "../../../inputs/PostReportWhereInput";
import { PostReportWhereUniqueInput } from "../../../inputs/PostReportWhereUniqueInput";
import { PostReportScalarFieldEnum } from "../../../../enums/PostReportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PostReportsArgs {
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

  @TypeGraphQL.Field(_type => [PostReportScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "reporterId" | "postId" | "reason" | "details" | "status" | "reviewedAt" | "createdAt"> | undefined;
}
