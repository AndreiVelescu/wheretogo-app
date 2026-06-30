import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareCreateManyPostInputEnvelope } from "../inputs/PostShareCreateManyPostInputEnvelope";
import { PostShareCreateOrConnectWithoutPostInput } from "../inputs/PostShareCreateOrConnectWithoutPostInput";
import { PostShareCreateWithoutPostInput } from "../inputs/PostShareCreateWithoutPostInput";
import { PostShareScalarWhereInput } from "../inputs/PostShareScalarWhereInput";
import { PostShareUpdateManyWithWhereWithoutPostInput } from "../inputs/PostShareUpdateManyWithWhereWithoutPostInput";
import { PostShareUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PostShareUpdateWithWhereUniqueWithoutPostInput";
import { PostShareUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PostShareUpsertWithWhereUniqueWithoutPostInput";
import { PostShareWhereUniqueInput } from "../inputs/PostShareWhereUniqueInput";

@TypeGraphQL.InputType("PostShareUpdateManyWithoutPostNestedInput", {})
export class PostShareUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => [PostShareCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostShareCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostShareCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: PostShareUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostShareCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostShareCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostShareUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: PostShareUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: PostShareUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostShareScalarWhereInput[] | undefined;
}
