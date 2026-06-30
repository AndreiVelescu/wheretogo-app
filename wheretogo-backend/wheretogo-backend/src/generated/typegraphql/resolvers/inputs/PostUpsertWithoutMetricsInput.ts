import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateWithoutMetricsInput } from "../inputs/PostCreateWithoutMetricsInput";
import { PostUpdateWithoutMetricsInput } from "../inputs/PostUpdateWithoutMetricsInput";
import { PostWhereInput } from "../inputs/PostWhereInput";

@TypeGraphQL.InputType("PostUpsertWithoutMetricsInput", {})
export class PostUpsertWithoutMetricsInput {
  @TypeGraphQL.Field(_type => PostUpdateWithoutMetricsInput, {
    nullable: false
  })
  update!: PostUpdateWithoutMetricsInput;

  @TypeGraphQL.Field(_type => PostCreateWithoutMetricsInput, {
    nullable: false
  })
  create!: PostCreateWithoutMetricsInput;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;
}
