import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutReportsInput } from "../inputs/PostCreateOrConnectWithoutReportsInput";
import { PostCreateWithoutReportsInput } from "../inputs/PostCreateWithoutReportsInput";
import { PostUpdateToOneWithWhereWithoutReportsInput } from "../inputs/PostUpdateToOneWithWhereWithoutReportsInput";
import { PostUpsertWithoutReportsInput } from "../inputs/PostUpsertWithoutReportsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutReportsNestedInput", {})
export class PostUpdateOneRequiredWithoutReportsNestedInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutReportsInput, {
    nullable: true
  })
  create?: PostCreateWithoutReportsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutReportsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutReportsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutReportsInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutReportsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateToOneWithWhereWithoutReportsInput, {
    nullable: true
  })
  update?: PostUpdateToOneWithWhereWithoutReportsInput | undefined;
}
