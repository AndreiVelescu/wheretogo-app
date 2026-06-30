import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportCreateWithoutPostInput } from "../inputs/PostReportCreateWithoutPostInput";
import { PostReportUpdateWithoutPostInput } from "../inputs/PostReportUpdateWithoutPostInput";
import { PostReportWhereUniqueInput } from "../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.InputType("PostReportUpsertWithWhereUniqueWithoutPostInput", {})
export class PostReportUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PostReportWhereUniqueInput, {
    nullable: false
  })
  where!: PostReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostReportUpdateWithoutPostInput, {
    nullable: false
  })
  update!: PostReportUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => PostReportCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostReportCreateWithoutPostInput;
}
