import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMetricsCreateWithoutPostInput } from "../inputs/PostMetricsCreateWithoutPostInput";
import { PostMetricsUpdateWithoutPostInput } from "../inputs/PostMetricsUpdateWithoutPostInput";
import { PostMetricsWhereInput } from "../inputs/PostMetricsWhereInput";

@TypeGraphQL.InputType("PostMetricsUpsertWithoutPostInput", {})
export class PostMetricsUpsertWithoutPostInput {
  @TypeGraphQL.Field(_type => PostMetricsUpdateWithoutPostInput, {
    nullable: false
  })
  update!: PostMetricsUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => PostMetricsCreateWithoutPostInput, {
    nullable: false
  })
  create!: PostMetricsCreateWithoutPostInput;

  @TypeGraphQL.Field(_type => PostMetricsWhereInput, {
    nullable: true
  })
  where?: PostMetricsWhereInput | undefined;
}
