import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripStopOrderByWithRelationInput } from "../../../inputs/TripStopOrderByWithRelationInput";
import { TripStopWhereInput } from "../../../inputs/TripStopWhereInput";
import { TripStopWhereUniqueInput } from "../../../inputs/TripStopWhereUniqueInput";
import { TripStopScalarFieldEnum } from "../../../../enums/TripStopScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTripStopArgs {
  @TypeGraphQL.Field(_type => TripStopWhereInput, {
    nullable: true
  })
  where?: TripStopWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TripStopOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TripStopOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TripStopWhereUniqueInput, {
    nullable: true
  })
  cursor?: TripStopWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TripStopScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "tripDayId" | "locationId" | "customName" | "address" | "lat" | "lng" | "order" | "arrivalTime" | "departureTime" | "transportMode" | "notes" | "estimatedCost" | "createdAt" | "updatedAt"> | undefined;
}
