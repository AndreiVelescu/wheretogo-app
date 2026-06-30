import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavoriteCreateManyInput } from "../../../inputs/FavoriteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFavoriteArgs {
  @TypeGraphQL.Field(_type => [FavoriteCreateManyInput], {
    nullable: false
  })
  data!: FavoriteCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
