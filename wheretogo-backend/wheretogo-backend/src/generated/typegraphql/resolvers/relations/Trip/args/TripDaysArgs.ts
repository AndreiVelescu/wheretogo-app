import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TripDayOrderByWithRelationInput } from "../../../inputs/TripDayOrderByWithRelationInput";
import { TripDayWhereInput } from "../../../inputs/TripDayWhereInput";
import { TripDayWhereUniqueInput } from "../../../inputs/TripDayWhereUniqueInput";
import { TripDayScalarFieldEnum } from "../../../../enums/TripDayScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class TripDaysArgs {
  @TypeGraphQL.Field(_type => TripDayWhereInput, {
    nullable: true
  })
  where?: TripDayWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TripDayOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TripDayOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TripDayWhereUniqueInput, {
    nullable: true
  })
  cursor?: TripDayWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TripDayScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "tripId" | "date" | "dayNumber" | "notes" | "createdAt" | "updatedAt"> | undefined;
}
