import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FavoriteOrderByWithRelationInput } from "../../../inputs/FavoriteOrderByWithRelationInput";
import { FavoriteWhereInput } from "../../../inputs/FavoriteWhereInput";
import { FavoriteWhereUniqueInput } from "../../../inputs/FavoriteWhereUniqueInput";
import { FavoriteScalarFieldEnum } from "../../../../enums/FavoriteScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyFavoriteArgs {
  @TypeGraphQL.Field(_type => FavoriteWhereInput, {
    nullable: true
  })
  where?: FavoriteWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FavoriteOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FavoriteOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FavoriteWhereUniqueInput, {
    nullable: true
  })
  cursor?: FavoriteWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [FavoriteScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "locationId" | "createdAt"> | undefined;
}
