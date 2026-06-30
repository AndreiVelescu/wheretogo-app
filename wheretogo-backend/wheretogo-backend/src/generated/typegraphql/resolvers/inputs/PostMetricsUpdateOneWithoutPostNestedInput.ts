import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMetricsCreateOrConnectWithoutPostInput } from "../inputs/PostMetricsCreateOrConnectWithoutPostInput";
import { PostMetricsCreateWithoutPostInput } from "../inputs/PostMetricsCreateWithoutPostInput";
import { PostMetricsUpdateToOneWithWhereWithoutPostInput } from "../inputs/PostMetricsUpdateToOneWithWhereWithoutPostInput";
import { PostMetricsUpsertWithoutPostInput } from "../inputs/PostMetricsUpsertWithoutPostInput";
import { PostMetricsWhereInput } from "../inputs/PostMetricsWhereInput";
import { PostMetricsWhereUniqueInput } from "../inputs/PostMetricsWhereUniqueInput";

@TypeGraphQL.InputType("PostMetricsUpdateOneWithoutPostNestedInput", {})
export class PostMetricsUpdateOneWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => PostMetricsCreateWithoutPostInput, {
    nullable: true
  })
  create?: PostMetricsCreateWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsCreateOrConnectWithoutPostInput, {
    nullable: true
  })
  connectOrCreate?: PostMetricsCreateOrConnectWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsUpsertWithoutPostInput, {
    nullable: true
  })
  upsert?: PostMetricsUpsertWithoutPostInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsWhereInput, {
    nullable: true
  })
  disconnect?: PostMetricsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsWhereInput, {
    nullable: true
  })
  delete?: PostMetricsWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsWhereUniqueInput, {
    nullable: true
  })
  connect?: PostMetricsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostMetricsUpdateToOneWithWhereWithoutPostInput, {
    nullable: true
  })
  update?: PostMetricsUpdateToOneWithWhereWithoutPostInput | undefined;
}
