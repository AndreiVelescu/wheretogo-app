import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteCreateManyLocationInputEnvelope } from "../inputs/FavoriteCreateManyLocationInputEnvelope";
import { FavoriteCreateOrConnectWithoutLocationInput } from "../inputs/FavoriteCreateOrConnectWithoutLocationInput";
import { FavoriteCreateWithoutLocationInput } from "../inputs/FavoriteCreateWithoutLocationInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.InputType("FavoriteCreateNestedManyWithoutLocationInput", {})
export class FavoriteCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [FavoriteCreateWithoutLocationInput], {
    nullable: true
  })
  create?: FavoriteCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: FavoriteCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => FavoriteCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: FavoriteCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput], {
    nullable: true
  })
  connect?: FavoriteWhereUniqueInput[] | undefined;
}
