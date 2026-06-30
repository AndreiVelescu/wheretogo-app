import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportUpdateWithoutPostInput } from "../inputs/PostReportUpdateWithoutPostInput";
import { PostReportWhereUniqueInput } from "../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.InputType("PostReportUpdateWithWhereUniqueWithoutPostInput", {})
export class PostReportUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => PostReportWhereUniqueInput, {
    nullable: false
  })
  where!: PostReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostReportUpdateWithoutPostInput, {
    nullable: false
  })
  data!: PostReportUpdateWithoutPostInput;
}
