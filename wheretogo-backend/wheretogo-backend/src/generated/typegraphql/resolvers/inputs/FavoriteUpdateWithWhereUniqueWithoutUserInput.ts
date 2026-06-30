import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteUpdateWithoutUserInput } from "../inputs/FavoriteUpdateWithoutUserInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.InputType("FavoriteUpdateWithWhereUniqueWithoutUserInput", {})
export class FavoriteUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => FavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavoriteUpdateWithoutUserInput, {
    nullable: false
  })
  data!: FavoriteUpdateWithoutUserInput;
}
