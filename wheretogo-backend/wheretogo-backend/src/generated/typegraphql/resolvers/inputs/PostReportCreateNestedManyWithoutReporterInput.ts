import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportCreateManyReporterInputEnvelope } from "../inputs/PostReportCreateManyReporterInputEnvelope";
import { PostReportCreateOrConnectWithoutReporterInput } from "../inputs/PostReportCreateOrConnectWithoutReporterInput";
import { PostReportCreateWithoutReporterInput } from "../inputs/PostReportCreateWithoutReporterInput";
import { PostReportWhereUniqueInput } from "../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.InputType("PostReportCreateNestedManyWithoutReporterInput", {})
export class PostReportCreateNestedManyWithoutReporterInput {
  @TypeGraphQL.Field(_type => [PostReportCreateWithoutReporterInput], {
    nullable: true
  })
  create?: PostReportCreateWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportCreateOrConnectWithoutReporterInput], {
    nullable: true
  })
  connectOrCreate?: PostReportCreateOrConnectWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => PostReportCreateManyReporterInputEnvelope, {
    nullable: true
  })
  createMany?: PostReportCreateManyReporterInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostReportWhereUniqueInput], {
    nullable: true
  })
  connect?: PostReportWhereUniqueInput[] | undefined;
}
