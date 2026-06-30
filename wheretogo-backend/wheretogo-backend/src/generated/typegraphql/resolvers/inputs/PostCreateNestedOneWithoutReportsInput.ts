import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutReportsInput } from "../inputs/PostCreateOrConnectWithoutReportsInput";
import { PostCreateWithoutReportsInput } from "../inputs/PostCreateWithoutReportsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutReportsInput", {})
export class PostCreateNestedOneWithoutReportsInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutReportsInput, {
    nullable: true
  })
  create?: PostCreateWithoutReportsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutReportsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutReportsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
