import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMetricsUpdateWithoutPostInput } from "../inputs/PostMetricsUpdateWithoutPostInput";
import { PostMetricsWhereInput } from "../inputs/PostMetricsWhereInput";

@TypeGraphQL.InputType("PostMetricsUpdateToOneWithWhereWithoutPostInput", {})
export class PostMetricsUpdateToOneWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => PostMetricsWhereInput, {
    nullable: true
  })
  where?: PostMetricsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsUpdateWithoutPostInput, {
    nullable: false
  })
  data!: PostMetricsUpdateWithoutPostInput;
}
