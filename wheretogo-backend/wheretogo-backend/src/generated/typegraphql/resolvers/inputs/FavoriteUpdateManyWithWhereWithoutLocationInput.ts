import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteScalarWhereInput } from "../inputs/FavoriteScalarWhereInput";
import { FavoriteUpdateManyMutationInput } from "../inputs/FavoriteUpdateManyMutationInput";

@TypeGraphQL.InputType("FavoriteUpdateManyWithWhereWithoutLocationInput", {})
export class FavoriteUpdateManyWithWhereWithoutLocationInput {
  @TypeGraphQL.Field(_type => FavoriteScalarWhereInput, {
    nullable: false
  })
  where!: FavoriteScalarWhereInput;

  @TypeGraphQL.Field(_type => FavoriteUpdateManyMutationInput, {
    nullable: false
  })
  data!: FavoriteUpdateManyMutationInput;
}
