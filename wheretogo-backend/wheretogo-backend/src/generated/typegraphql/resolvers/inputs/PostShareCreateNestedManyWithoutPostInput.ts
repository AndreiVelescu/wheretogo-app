import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareCreateManyPostInputEnvelope } from "../inputs/PostShareCreateManyPostInputEnvelope";
import { PostShareCreateOrConnectWithoutPostInput } from "../inputs/PostShareCreateOrConnectWithoutPostInput";
import { PostShareCreateWithoutPostInput } from "../inputs/PostShareCreateWithoutPostInput";
import { PostShareWhereUniqueInput } from "../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.InputType("PostShareCreateNestedManyWithoutPostInput", {})
export class PostShareCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [PostShareCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostShareCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostShareCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostShareCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostShareCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostShareWhereUniqueInput], {
    nullable: true
  })
  connect?: PostShareWhereUniqueInput[] | undefined;
}
