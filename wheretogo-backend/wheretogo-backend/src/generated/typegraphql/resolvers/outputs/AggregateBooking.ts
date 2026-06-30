import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingAvgAggregate } from "../outputs/BookingAvgAggregate";
import { BookingCountAggregate } from "../outputs/BookingCountAggregate";
import { BookingMaxAggregate } from "../outputs/BookingMaxAggregate";
import { BookingMinAggregate } from "../outputs/BookingMinAggregate";
import { BookingSumAggregate } from "../outputs/BookingSumAggregate";

@TypeGraphQL.ObjectType("AggregateBooking", {
  simpleResolvers: true
})
export class AggregateBooking {
  @TypeGraphQL.Field(_type => BookingCountAggregate, {
    nullable: true
  })
  _count!: BookingCountAggregate | null;

  @TypeGraphQL.Field(_type => BookingAvgAggregate, {
    nullable: true
  })
  _avg!: BookingAvgAggregate | null;

  @TypeGraphQL.Field(_type => BookingSumAggregate, {
    nullable: true
  })
  _sum!: BookingSumAggregate | null;

  @TypeGraphQL.Field(_type => BookingMinAggregate, {
    nullable: true
  })
  _min!: BookingMinAggregate | null;

  @TypeGraphQL.Field(_type => BookingMaxAggregate, {
    nullable: true
  })
  _max!: BookingMaxAggregate | null;
}
