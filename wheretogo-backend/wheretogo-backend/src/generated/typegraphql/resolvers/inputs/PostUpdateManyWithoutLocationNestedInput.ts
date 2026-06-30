import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyLocationInputEnvelope } from "../inputs/PostCreateManyLocationInputEnvelope";
import { PostCreateOrConnectWithoutLocationInput } from "../inputs/PostCreateOrConnectWithoutLocationInput";
import { PostCreateWithoutLocationInput } from "../inputs/PostCreateWithoutLocationInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutLocationInput } from "../inputs/PostUpdateManyWithWhereWithoutLocationInput";
import { PostUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/PostUpdateWithWhereUniqueWithoutLocationInput";
import { PostUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/PostUpsertWithWhereUniqueWithoutLocationInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutLocationNestedInput", {})
export class PostUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutLocationInput], {
    nullable: true
  })
  create?: PostCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
