import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportCreateWithoutReporterInput } from "../inputs/PostReportCreateWithoutReporterInput";
import { PostReportWhereUniqueInput } from "../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.InputType("PostReportCreateOrConnectWithoutReporterInput", {})
export class PostReportCreateOrConnectWithoutReporterInput {
  @TypeGraphQL.Field(_type => PostReportWhereUniqueInput, {
    nullable: false
  })
  where!: PostReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostReportCreateWithoutReporterInput, {
    nullable: false
  })
  create!: PostReportCreateWithoutReporterInput;
}
