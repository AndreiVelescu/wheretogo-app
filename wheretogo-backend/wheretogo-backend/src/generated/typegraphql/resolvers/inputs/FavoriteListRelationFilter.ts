import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteWhereInput } from "../inputs/FavoriteWhereInput";

@TypeGraphQL.InputType("FavoriteListRelationFilter", {})
export class FavoriteListRelationFilter {
  @TypeGraphQL.Field(_type => FavoriteWhereInput, {
    nullable: true
  })
  every?: FavoriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => FavoriteWhereInput, {
    nullable: true
  })
  some?: FavoriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => FavoriteWhereInput, {
    nullable: true
  })
  none?: FavoriteWhereInput | undefined;
}
