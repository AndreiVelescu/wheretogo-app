import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteCreateManyLocationInputEnvelope } from "../inputs/FavoriteCreateManyLocationInputEnvelope";
import { FavoriteCreateOrConnectWithoutLocationInput } from "../inputs/FavoriteCreateOrConnectWithoutLocationInput";
import { FavoriteCreateWithoutLocationInput } from "../inputs/FavoriteCreateWithoutLocationInput";
import { FavoriteScalarWhereInput } from "../inputs/FavoriteScalarWhereInput";
import { FavoriteUpdateManyWithWhereWithoutLocationInput } from "../inputs/FavoriteUpdateManyWithWhereWithoutLocationInput";
import { FavoriteUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/FavoriteUpdateWithWhereUniqueWithoutLocationInput";
import { FavoriteUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/FavoriteUpsertWithWhereUniqueWithoutLocationInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.InputType("FavoriteUpdateManyWithoutLocationNestedInput", {})
export class FavoriteUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [FavoriteCreateWithoutLocationInput], {
    nullable: true
  })
  create?: FavoriteCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: FavoriteCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: FavoriteUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => FavoriteCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: FavoriteCreateManyLocationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [FavoriteUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: FavoriteUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: FavoriteUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FavoriteScalarWhereInput[] | undefined;
}
