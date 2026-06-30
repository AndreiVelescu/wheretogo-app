import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationOrderByWithAggregationInput } from "../../../inputs/LocationOrderByWithAggregationInput";
import { LocationScalarWhereWithAggregatesInput } from "../../../inputs/LocationScalarWhereWithAggregatesInput";
import { LocationWhereInput } from "../../../inputs/LocationWhereInput";
import { LocationScalarFieldEnum } from "../../../../enums/LocationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLocationArgs {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LocationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "placeId" | "name" | "description" | "type" | "types" | "priceRange" | "vibes" | "address" | "lat" | "lng" | "rating" | "userRatingsTotal" | "website" | "phone" | "googleUrl" | "openHours" | "photos" | "menuPdf" | "popularityScore" | "estimatedCost" | "googleImported" | "createdAt">;

  @TypeGraphQL.Field(_type => LocationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LocationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
