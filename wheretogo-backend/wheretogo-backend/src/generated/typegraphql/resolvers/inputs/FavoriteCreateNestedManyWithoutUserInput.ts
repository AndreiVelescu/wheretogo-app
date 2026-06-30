import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteCreateManyUserInputEnvelope } from "../inputs/FavoriteCreateManyUserInputEnvelope";
import { FavoriteCreateOrConnectWithoutUserInput } from "../inputs/FavoriteCreateOrConnectWithoutUserInput";
import { FavoriteCreateWithoutUserInput } from "../inputs/FavoriteCreateWithoutUserInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.InputType("FavoriteCreateNestedManyWithoutUserInput", {})
export class FavoriteCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [FavoriteCreateWithoutUserInput], {
    nullable: true
  })
  create?: FavoriteCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => FavoriteCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: FavoriteCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput], {
    nullable: true
  })
  connect?: FavoriteWhereUniqueInput[] | undefined;
}
