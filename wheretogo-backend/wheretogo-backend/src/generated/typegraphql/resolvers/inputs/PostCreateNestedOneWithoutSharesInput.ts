import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutSharesInput } from "../inputs/PostCreateOrConnectWithoutSharesInput";
import { PostCreateWithoutSharesInput } from "../inputs/PostCreateWithoutSharesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutSharesInput", {})
export class PostCreateNestedOneWithoutSharesInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutSharesInput, {
    nullable: true
  })
  create?: PostCreateWithoutSharesInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutSharesInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutSharesInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
