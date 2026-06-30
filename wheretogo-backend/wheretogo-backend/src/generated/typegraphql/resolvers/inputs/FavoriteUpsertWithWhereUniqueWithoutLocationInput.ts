import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteCreateWithoutLocationInput } from "../inputs/FavoriteCreateWithoutLocationInput";
import { FavoriteUpdateWithoutLocationInput } from "../inputs/FavoriteUpdateWithoutLocationInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.InputType("FavoriteUpsertWithWhereUniqueWithoutLocationInput", {})
export class FavoriteUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => FavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavoriteUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: FavoriteUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => FavoriteCreateWithoutLocationInput, {
    nullable: false
  })
  create!: FavoriteCreateWithoutLocationInput;
}
