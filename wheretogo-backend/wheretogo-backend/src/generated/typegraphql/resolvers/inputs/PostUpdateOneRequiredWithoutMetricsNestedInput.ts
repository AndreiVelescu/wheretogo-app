import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutMetricsInput } from "../inputs/PostCreateOrConnectWithoutMetricsInput";
import { PostCreateWithoutMetricsInput } from "../inputs/PostCreateWithoutMetricsInput";
import { PostUpdateToOneWithWhereWithoutMetricsInput } from "../inputs/PostUpdateToOneWithWhereWithoutMetricsInput";
import { PostUpsertWithoutMetricsInput } from "../inputs/PostUpsertWithoutMetricsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutMetricsNestedInput", {})
export class PostUpdateOneRequiredWithoutMetricsNestedInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutMetricsInput, {
    nullable: true
  })
  create?: PostCreateWithoutMetricsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutMetricsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutMetricsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutMetricsInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutMetricsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateToOneWithWhereWithoutMetricsInput, {
    nullable: true
  })
  update?: PostUpdateToOneWithWhereWithoutMetricsInput | undefined;
}
