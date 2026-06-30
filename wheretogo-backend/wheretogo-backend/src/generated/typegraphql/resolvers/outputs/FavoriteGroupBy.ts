import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteAvgAggregate } from "../outputs/FavoriteAvgAggregate";
import { FavoriteCountAggregate } from "../outputs/FavoriteCountAggregate";
import { FavoriteMaxAggregate } from "../outputs/FavoriteMaxAggregate";
import { FavoriteMinAggregate } from "../outputs/FavoriteMinAggregate";
import { FavoriteSumAggregate } from "../outputs/FavoriteSumAggregate";

@TypeGraphQL.ObjectType("FavoriteGroupBy", {
  simpleResolvers: true
})
export class FavoriteGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  locationId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => FavoriteCountAggregate, {
    nullable: true
  })
  _count!: FavoriteCountAggregate | null;

  @TypeGraphQL.Field(_type => FavoriteAvgAggregate, {
    nullable: true
  })
  _avg!: FavoriteAvgAggregate | null;

  @TypeGraphQL.Field(_type => FavoriteSumAggregate, {
    nullable: true
  })
  _sum!: FavoriteSumAggregate | null;

  @TypeGraphQL.Field(_type => FavoriteMinAggregate, {
    nullable: true
  })
  _min!: FavoriteMinAggregate | null;

  @TypeGraphQL.Field(_type => FavoriteMaxAggregate, {
    nullable: true
  })
  _max!: FavoriteMaxAggregate | null;
}
