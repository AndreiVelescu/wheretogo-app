import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMediaCreateManyPostInputEnvelope } from "../inputs/PostMediaCreateManyPostInputEnvelope";
import { PostMediaCreateOrConnectWithoutPostInput } from "../inputs/PostMediaCreateOrConnectWithoutPostInput";
import { PostMediaCreateWithoutPostInput } from "../inputs/PostMediaCreateWithoutPostInput";
import { PostMediaWhereUniqueInput } from "../inputs/PostMediaWhereUniqueInput";

@TypeGraphQL.InputType("PostMediaCreateNestedManyWithoutPostInput", {})
export class PostMediaCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PostMediaCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostMediaCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMediaCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostMediaCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostMediaCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostMediaWhereUniqueInput], {
    nullable: true
  })
  connect?: PostMediaWhereUniqueInput[] | undefined;
}
