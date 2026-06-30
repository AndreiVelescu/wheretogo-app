import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteUpdateWithoutLocationInput } from "../inputs/FavoriteUpdateWithoutLocationInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.InputType("FavoriteUpdateWithWhereUniqueWithoutLocationInput", {})
export class FavoriteUpdateWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => FavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavoriteUpdateWithoutLocationInput, {
    nullable: false
  })
  data!: FavoriteUpdateWithoutLocationInput;
}
