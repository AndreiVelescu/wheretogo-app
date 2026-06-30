import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutFavoritesInput } from "../inputs/LocationCreateOrConnectWithoutFavoritesInput";
import { LocationCreateWithoutFavoritesInput } from "../inputs/LocationCreateWithoutFavoritesInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedOneWithoutFavoritesInput", {})
export class LocationCreateNestedOneWithoutFavoritesInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutFavoritesInput, {
    nullable: true
  })
  create?: LocationCreateWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutFavoritesInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutFavoritesInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;
}
