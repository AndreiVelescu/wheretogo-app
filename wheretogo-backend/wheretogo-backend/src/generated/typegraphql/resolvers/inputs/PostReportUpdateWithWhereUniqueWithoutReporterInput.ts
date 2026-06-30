import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportUpdateWithoutReporterInput } from "../inputs/PostReportUpdateWithoutReporterInput";
import { PostReportWhereUniqueInput } from "../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.InputType("PostReportUpdateWithWhereUniqueWithoutReporterInput", {})
export class PostReportUpdateWithWhereUniqueWithoutReporterInput {
  @TypeGraphQL.Field(_type => PostReportWhereUniqueInput, {
    nullable: false
  })
  where!: PostReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostReportUpdateWithoutReporterInput, {
    nullable: false
  })
  data!: PostReportUpdateWithoutReporterInput;
}
