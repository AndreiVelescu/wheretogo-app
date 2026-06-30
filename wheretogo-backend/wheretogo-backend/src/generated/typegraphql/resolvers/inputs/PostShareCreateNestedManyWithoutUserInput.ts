import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareCreateManyUserInputEnvelope } from "../inputs/PostShareCreateManyUserInputEnvelope";
import { PostShareCreateOrConnectWithoutUserInput } from "../inputs/PostShareCreateOrConnectWithoutUserInput";
import { PostShareCreateWithoutUserInput } from "../inputs/PostShareCreateWithoutUserInput";
import { PostShareWhereUniqueInput } from "../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.InputType("PostShareCreateNestedManyWithoutUserInput", {})
export class PostShareCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [PostShareCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostShareCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostShareCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostShareCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostShareCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostShareWhereUniqueInput], {
    nullable: true
  })
  connect?: PostShareWhereUniqueInput[] | undefined;
}
