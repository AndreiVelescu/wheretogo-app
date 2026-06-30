import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportCreateManyReporterInputEnvelope } from "../inputs/PostReportCreateManyReporterInputEnvelope";
import { PostReportCreateOrConnectWithoutReporterInput } from "../inputs/PostReportCreateOrConnectWithoutReporterInput";
import { PostReportCreateWithoutReporterInput } from "../inputs/PostReportCreateWithoutReporterInput";
import { PostReportScalarWhereInput } from "../inputs/PostReportScalarWhereInput";
import { PostReportUpdateManyWithWhereWithoutReporterInput } from "../inputs/PostReportUpdateManyWithWhereWithoutReporterInput";
import { PostReportUpdateWithWhereUniqueWithoutReporterInput } from "../inputs/PostReportUpdateWithWhereUniqueWithoutReporterInput";
import { PostReportUpsertWithWhereUniqueWithoutReporterInput } from "../inputs/PostReportUpsertWithWhereUniqueWithoutReporterInput";
import { PostReportWhereUniqueInput } from "../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.InputType("PostReportUpdateManyWithoutReporterNestedInput", {})
export class PostReportUpdateManyWithoutReporterNestedInput {
  @TypeGraphQL.Field(_type => [PostReportCreateWithoutReporterInput], {
    nullable: true
  })
  create?: PostReportCreateWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportCreateOrConnectWithoutReporterInput], {
    nullable: true
  })
  connectOrCreate?: PostReportCreateOrConnectWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportUpsertWithWhereUniqueWithoutReporterInput], {
    nullable: true
  })
  upsert?: PostReportUpsertWithWhereUniqueWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => PostReportCreateManyReporterInputEnvelope, {
    nullable: true
  })
  createMany?: PostReportCreateManyReporterInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostReportWhereUniqueInput], {
    nullable: true
  })
  set?: PostReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportWhereUniqueInput], {
    nullable: true
  })
  delete?: PostReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportWhereUniqueInput], {
    nullable: true
  })
  connect?: PostReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportUpdateWithWhereUniqueWithoutReporterInput], {
    nullable: true
  })
  update?: PostReportUpdateWithWhereUniqueWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportUpdateManyWithWhereWithoutReporterInput], {
    nullable: true
  })
  updateMany?: PostReportUpdateManyWithWhereWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostReportScalarWhereInput[] | undefined;
}
