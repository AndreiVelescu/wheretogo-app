import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutSavesInput } from "../inputs/PostCreateOrConnectWithoutSavesInput";
import { PostCreateWithoutSavesInput } from "../inputs/PostCreateWithoutSavesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedOneWithoutSavesInput", {})
export class PostCreateNestedOneWithoutSavesInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutSavesInput, {
    nullable: true
  })
  create?: PostCreateWithoutSavesInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutSavesInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutSavesInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;
}
