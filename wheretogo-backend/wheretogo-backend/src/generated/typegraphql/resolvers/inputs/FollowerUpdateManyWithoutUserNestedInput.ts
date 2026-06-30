import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerCreateManyUserInputEnvelope } from "../inputs/FollowerCreateManyUserInputEnvelope";
import { FollowerCreateOrConnectWithoutUserInput } from "../inputs/FollowerCreateOrConnectWithoutUserInput";
import { FollowerCreateWithoutUserInput } from "../inputs/FollowerCreateWithoutUserInput";
import { FollowerScalarWhereInput } from "../inputs/FollowerScalarWhereInput";
import { FollowerUpdateManyWithWhereWithoutUserInput } from "../inputs/FollowerUpdateManyWithWhereWithoutUserInput";
import { FollowerUpdateWithWhereUniqueWithoutUserInput } from "../inputs/FollowerUpdateWithWhereUniqueWithoutUserInput";
import { FollowerUpsertWithWhereUniqueWithoutUserInput } from "../inputs/FollowerUpsertWithWhereUniqueWithoutUserInput";
import { FollowerWhereUniqueInput } from "../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.InputType("FollowerUpdateManyWithoutUserNestedInput", {})
export class FollowerUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [FollowerCreateWithoutUserInput], {
    nullable: true
  })
  create?: FollowerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FollowerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: FollowerUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FollowerCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FollowerCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FollowerUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: FollowerUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: FollowerUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FollowerScalarWhereInput[] | undefined;
}
