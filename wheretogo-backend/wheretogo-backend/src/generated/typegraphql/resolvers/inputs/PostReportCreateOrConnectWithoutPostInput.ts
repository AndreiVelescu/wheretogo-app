import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostReportCreateWithoutPostInput } from "../inputs/PostReportCreateWithoutPostInput";
import { PostReportWhereUniqueInput } from "../inputs/PostReportWhereUniqueInput";

@TypeGraphQL.InputType("PostReportCreateOrConnectWithoutPostInput", {})
export class PostReportCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => PostReportWhereUniqueInput, {
    nullable: false
  })
  where!: PostReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostReportCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostReportCreateWithoutPostInput;
}
