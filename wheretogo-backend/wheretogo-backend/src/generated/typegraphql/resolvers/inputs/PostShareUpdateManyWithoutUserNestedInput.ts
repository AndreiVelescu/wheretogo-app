import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareCreateManyUserInputEnvelope } from "../inputs/PostShareCreateManyUserInputEnvelope";
import { PostShareCreateOrConnectWithoutUserInput } from "../inputs/PostShareCreateOrConnectWithoutUserInput";
import { PostShareCreateWithoutUserInput } from "../inputs/PostShareCreateWithoutUserInput";
import { PostShareScalarWhereInput } from "../inputs/PostShareScalarWhereInput";
import { PostShareUpdateManyWithWhereWithoutUserInput } from "../inputs/PostShareUpdateManyWithWhereWithoutUserInput";
import { PostShareUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PostShareUpdateWithWhereUniqueWithoutUserInput";
import { PostShareUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PostShareUpsertWithWhereUniqueWithoutUserInput";
import { PostShareWhereUniqueInput } from "../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.InputType("PostShareUpdateManyWithoutUserNestedInput", {})
export class PostShareUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [PostShareCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostShareCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostShareCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PostShareUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostShareCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostShareCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostShareWhereUniqueInput], {
    nullable: true
  })
  set?: PostShareWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostShareWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareWhereUniqueInput], {
    nullable: true
  })
  delete?: PostShareWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareWhereUniqueInput], {
    nullable: true
  })
  connect?: PostShareWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PostShareUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PostShareUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostShareScalarWhereInput[] | undefined;
}
