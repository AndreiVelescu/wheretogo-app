import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteCreateWithoutLocationInput } from "../inputs/FavoriteCreateWithoutLocationInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.InputType("FavoriteCreateOrConnectWithoutLocationInput", {})
export class FavoriteCreateOrConnectWithoutLocationInput {
  @TypeGraphQL.Field(_type => FavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavoriteCreateWithoutLocationInput, {
    nullable: false
  })
  create!: FavoriteCreateWithoutLocationInput;
}
