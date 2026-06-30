import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("FavoriteScalarWhereInput", {})
export class FavoriteScalarWhereInput {
  @TypeGraphQL.Field(_type => [FavoriteScalarWhereInput], {
    nullable: true
  })
  AND?: FavoriteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteScalarWhereInput], {
    nullable: true
  })
  OR?: FavoriteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FavoriteScalarWhereInput], {
    nullable: true
  })
  NOT?: FavoriteScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  locationId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
