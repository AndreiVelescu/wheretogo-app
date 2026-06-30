import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookingOrderByWithAggregationInput } from "../../../inputs/BookingOrderByWithAggregationInput";
import { BookingScalarWhereWithAggregatesInput } from "../../../inputs/BookingScalarWhereWithAggregatesInput";
import { BookingWhereInput } from "../../../inputs/BookingWhereInput";
import { BookingScalarFieldEnum } from "../../../../enums/BookingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByBookingArgs {
  @TypeGraphQL.Field(_type => BookingWhereInput, {
    nullable: true
  })
  where?: BookingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: BookingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "locationId" | "date" | "time" | "persons" | "status" | "affiliateUrl" | "createdAt">;

  @TypeGraphQL.Field(_type => BookingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: BookingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
