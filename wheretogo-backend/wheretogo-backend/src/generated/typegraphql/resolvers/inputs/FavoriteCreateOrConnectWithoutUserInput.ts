import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteCreateWithoutUserInput } from "../inputs/FavoriteCreateWithoutUserInput";
import { FavoriteWhereUniqueInput } from "../inputs/FavoriteWhereUniqueInput";

@TypeGraphQL.InputType("FavoriteCreateOrConnectWithoutUserInput", {})
export class FavoriteCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => FavoriteWhereUniqueInput, {
    nullable: false
  })
  where!: FavoriteWhereUniqueInput;

  @TypeGraphQL.Field(_type => FavoriteCreateWithoutUserInput, {
    nullable: false
  })
  create!: FavoriteCreateWithoutUserInput;
}
