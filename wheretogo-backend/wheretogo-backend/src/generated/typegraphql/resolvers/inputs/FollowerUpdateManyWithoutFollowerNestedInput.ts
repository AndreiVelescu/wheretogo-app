import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCreateManyFollowerInputEnvelope } from "../inputs/FollowerCreateManyFollowerInputEnvelope";
import { FollowerCreateOrConnectWithoutFollowerInput } from "../inputs/FollowerCreateOrConnectWithoutFollowerInput";
import { FollowerCreateWithoutFollowerInput } from "../inputs/FollowerCreateWithoutFollowerInput";
import { FollowerScalarWhereInput } from "../inputs/FollowerScalarWhereInput";
import { FollowerUpdateManyWithWhereWithoutFollowerInput } from "../inputs/FollowerUpdateManyWithWhereWithoutFollowerInput";
import { FollowerUpdateWithWhereUniqueWithoutFollowerInput } from "../inputs/FollowerUpdateWithWhereUniqueWithoutFollowerInput";
import { FollowerUpsertWithWhereUniqueWithoutFollowerInput } from "../inputs/FollowerUpsertWithWhereUniqueWithoutFollowerInput";
import { FollowerWhereUniqueInput } from "../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.InputType("FollowerUpdateManyWithoutFollowerNestedInput", {})
export class FollowerUpdateManyWithoutFollowerNestedInput {
  @TypeGraphQL.Field(_type => [FollowerCreateWithoutFollowerInput], {
    nullable: true
  })
  create?: FollowerCreateWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerCreateOrConnectWithoutFollowerInput], {
    nullable: true
  })
  connectOrCreate?: FollowerCreateOrConnectWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerUpsertWithWhereUniqueWithoutFollowerInput], {
    nullable: true
  })
  upsert?: FollowerUpsertWithWhereUniqueWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowerCreateManyFollowerInputEnvelope, {
    nullable: true
  })
  createMany?: FollowerCreateManyFollowerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FollowerWhereUniqueInput], {
    nullable: true
  })
  set?: FollowerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FollowerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerWhereUniqueInput], {
    nullable: true
  })
  delete?: FollowerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerWhereUniqueInput], {
    nullable: true
  })
  connect?: FollowerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerUpdateWithWhereUniqueWithoutFollowerInput], {
    nullable: true
  })
  update?: FollowerUpdateWithWhereUniqueWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerUpdateManyWithWhereWithoutFollowerInput], {
    nullable: true
  })
  updateMany?: FollowerUpdateManyWithWhereWithoutFollowerInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FollowerScalarWhereInput[] | undefined;
}
