import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportCreateManyPostInputEnvelope } from "../inputs/PostReportCreateManyPostInputEnvelope";
import { PostReportCreateOrConnectWithoutPostInput } from "../inputs/PostReportCreateOrConnectWithoutPostInput";
import { PostReportCreateWithoutPostInput } from "../inputs/PostReportCreateWithoutPostInput";
import { PostReportScalarWhereInput } from "../inputs/PostReportScalarWhereInput";
import { PostReportUpdateManyWithWhereWithoutPostInput } from "../inputs/PostReportUpdateManyWithWhereWithoutPostInput";
import { PostReportUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PostReportUpdateWithWhereUniqueWithoutPostInput";
import { PostReportUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PostReportUpsertWithWhereUniqueWithoutPostInput";
import { PostReportWhereUniqueInput } from "../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.InputType("PostReportUpdateManyWithoutPostNestedInput", {})
export class PostReportUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => [PostReportCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostReportCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostReportCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: PostReportUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostReportCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostReportCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostReportUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: PostReportUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: PostReportUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostReportScalarWhereInput[] | undefined;
}
