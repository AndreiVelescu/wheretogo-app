import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostMediaCreateManyPostInputEnvelope } from "../inputs/PostMediaCreateManyPostInputEnvelope";
import { PostMediaCreateOrConnectWithoutPostInput } from "../inputs/PostMediaCreateOrConnectWithoutPostInput";
import { PostMediaCreateWithoutPostInput } from "../inputs/PostMediaCreateWithoutPostInput";
import { PostMediaScalarWhereInput } from "../inputs/PostMediaScalarWhereInput";
import { PostMediaUpdateManyWithWhereWithoutPostInput } from "../inputs/PostMediaUpdateManyWithWhereWithoutPostInput";
import { PostMediaUpdateWithWhereUniqueWithoutPostInput } from "../inputs/PostMediaUpdateWithWhereUniqueWithoutPostInput";
import { PostMediaUpsertWithWhereUniqueWithoutPostInput } from "../inputs/PostMediaUpsertWithWhereUniqueWithoutPostInput";
import { PostMediaWhereUniqueInput } from "../inputs/PostMediaWhereUniqueInput";

@TypeGraphQL.InputType("PostMediaUpdateManyWithoutPostNestedInput", {})
export class PostMediaUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => [PostMediaCreateWithoutPostInput], {
    nullable: true
  })
  create?: PostMediaCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMediaCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMediaUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: PostMediaUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => PostMediaCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: PostMediaCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostMediaWhereUniqueInput], {
    nullable: true
  })
  set?: PostMediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMediaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostMediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMediaWhereUniqueInput], {
    nullable: true
  })
  delete?: PostMediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMediaWhereUniqueInput], {
    nullable: true
  })
  connect?: PostMediaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMediaUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: PostMediaUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMediaUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: PostMediaUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostMediaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostMediaScalarWhereInput[] | undefined;
}
