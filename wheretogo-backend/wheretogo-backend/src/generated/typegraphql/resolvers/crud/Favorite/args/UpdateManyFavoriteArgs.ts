import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavoriteUpdateManyMutationInput } from "../../../inputs/FavoriteUpdateManyMutationInput";
import { FavoriteWhereInput } from "../../../inputs/FavoriteWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFavoriteArgs {
  @TypeGraphQL.Field(_type => FavoriteUpdateManyMutationInput, {
    nullable: false
  })
  data!: FavoriteUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FavoriteWhereInput, {
    nullable: true
  })
  where?: FavoriteWhereInput | undefined;
}
