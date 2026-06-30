import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportCreateManyPostInputEnvelope } from "../inputs/PostReportCreateManyPostInputEnvelope";
import { PostReportCreateOrConnectWithoutPostInput } from "../inputs/PostReportCreateOrConnectWithoutPostInput";
import { PostReportCreateWithoutPostInput } from "../inputs/PostReportCreateWithoutPostInput";
import { PostReportWhereUniqueInput } from "../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.InputType("PostReportCreateNestedManyWithoutPostInput", {})
export class PostReportCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PostReportCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostReportCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostReportCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostReportCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostReportCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostReportCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostReportWhereUniqueInput], {
    nullable: true
  })
  connect?: PostReportWhereUniqueInput[] | undefined;
}
