import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteCreateManyUserInputEnvelope } from "../inputs/FavoriteCreateManyUserInputEnvelope";
import { FavoriteCreateOrConnectWithoutUserInput } from "../inputs/FavoriteCreateOrConnectWithoutUserInput";
import { FavoriteCreateWithoutUserInput } from "../inputs/FavoriteCreateWithoutUserInput";
import { FavoriteScalarWhereInput } from "../inputs/FavoriteScalarWhereInput";
import { FavoriteUpdateManyWithWhereWithoutUserInput } from "../inputs/FavoriteUpdateManyWithWhereWithoutUserInput";
import { FavoriteUpdateWithWhereUniqueWithoutUserInput } from "../inputs/FavoriteUpdateWithWhereUniqueWithoutUserInput";
import { FavoriteUpsertWithWhereUniqueWithoutUserInput } from "../inputs/FavoriteUpsertWithWhereUniqueWithoutUserInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.InputType("FavoriteUpdateManyWithoutUserNestedInput", {})
export class FavoriteUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [FavoriteCreateWithoutUserInput], {
    nullable: true
  })
  create?: FavoriteCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FavoriteCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FavoriteCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput], {
    nullable: true
  })
  set?: FavoriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FavoriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput], {
    nullable: true
  })
  delete?: FavoriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput], {
    nullable: true
  })
  connect?: FavoriteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: FavoriteUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FavoriteScalarWhereInput[] | undefined;
}
