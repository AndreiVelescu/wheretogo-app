import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMetricsCreateOrConnectWithoutPostInput } from "../inputs/PostMetricsCreateOrConnectWithoutPostInput";
import { PostMetricsCreateWithoutPostInput } from "../inputs/PostMetricsCreateWithoutPostInput";
import { PostMetricsWhereUniqueInput } from "../inputs/PostMetricsWhereUniqueInput";

@TypeGraphQL.InputType("PostMetricsCreateNestedOneWithoutPostInput", {})
export class PostMetricsCreateNestedOneWithoutPostInput {
  @TypeGraphQL.Field(_type => PostMetricsCreateWithoutPostInput, {
    nullable: true
  })
  create?: PostMetricsCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsCreateOrConnectWithoutPostInput, {
    nullable: true
  })
  connectOrCreate?: PostMetricsCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsWhereUniqueInput, {
    nullable: true
  })
  connect?: PostMetricsWhereUniqueInput | undefined;
}
