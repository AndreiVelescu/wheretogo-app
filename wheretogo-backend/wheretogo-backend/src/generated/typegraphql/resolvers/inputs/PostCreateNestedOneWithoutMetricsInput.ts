import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutMetricsInput } from "../inputs/PostCreateOrConnectWithoutMetricsInput";
import { PostCreateWithoutMetricsInput } from "../inputs/PostCreateWithoutMetricsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutMetricsInput", {})
export class PostCreateNestedOneWithoutMetricsInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutMetricsInput, {
    nullable: true
  })
  create?: PostCreateWithoutMetricsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutMetricsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutMetricsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
