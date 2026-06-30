import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportCreateWithoutReporterInput } from "../inputs/PostReportCreateWithoutReporterInput";
import { PostReportUpdateWithoutReporterInput } from "../inputs/PostReportUpdateWithoutReporterInput";
import { PostReportWhereUniqueInput } from "../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.InputType("PostReportUpsertWithWhereUniqueWithoutReporterInput", {})
export class PostReportUpsertWithWhereUniqueWithoutReporterInput {
  @TypeGraphQL.Field(_type => PostReportWhereUniqueInput, {
    nullable: false
  })
  where!: PostReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostReportUpdateWithoutReporterInput, {
    nullable: false
  })
  update!: PostReportUpdateWithoutReporterInput;

  @TypeGraphQL.Field(_type => PostReportCreateWithoutReporterInput, {
    nullable: false
  })
  create!: PostReportCreateWithoutReporterInput;
}
