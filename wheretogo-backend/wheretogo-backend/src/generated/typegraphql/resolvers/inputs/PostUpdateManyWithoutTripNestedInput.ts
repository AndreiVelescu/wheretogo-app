import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyTripInputEnvelope } from "../inputs/PostCreateManyTripInputEnvelope";
import { PostCreateOrConnectWithoutTripInput } from "../inputs/PostCreateOrConnectWithoutTripInput";
import { PostCreateWithoutTripInput } from "../inputs/PostCreateWithoutTripInput";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyWithWhereWithoutTripInput } from "../inputs/PostUpdateManyWithWhereWithoutTripInput";
import { PostUpdateWithWhereUniqueWithoutTripInput } from "../inputs/PostUpdateWithWhereUniqueWithoutTripInput";
import { PostUpsertWithWhereUniqueWithoutTripInput } from "../inputs/PostUpsertWithWhereUniqueWithoutTripInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateManyWithoutTripNestedInput", {})
export class PostUpdateManyWithoutTripNestedInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutTripInput], {
    nullable: true
  })
  create?: PostCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpsertWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  upsert?: PostUpsertWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyTripInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PostUpdateWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  update?: PostUpdateWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostUpdateManyWithWhereWithoutTripInput], {
    nullable: true
  })
  updateMany?: PostUpdateManyWithWhereWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
