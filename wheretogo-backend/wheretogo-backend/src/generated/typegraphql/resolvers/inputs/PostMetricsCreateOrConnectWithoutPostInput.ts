import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMetricsCreateWithoutPostInput } from "../inputs/PostMetricsCreateWithoutPostInput";
import { PostMetricsWhereUniqueInput } from "../inputs/PostMetricsWhereUniqueInput";

@TypeGraphQL.InputType("PostMetricsCreateOrConnectWithoutPostInput", {})
export class PostMetricsCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => PostMetricsWhereUniqueInput, {
    nullable: false
  })
  where!: PostMetricsWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostMetricsCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostMetricsCreateWithoutPostInput;
}
