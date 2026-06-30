import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingAvgAggregate } from "../outputs/BookingAvgAggregate";
import { BookingCountAggregate } from "../outputs/BookingCountAggregate";
import { BookingMaxAggregate } from "../outputs/BookingMaxAggregate";
import { BookingMinAggregate } from "../outputs/BookingMinAggregate";
import { BookingSumAggregate } from "../outputs/BookingSumAggregate";
import { BookingStatus } from "../../enums/BookingStatus";

@TypeGraphQL.ObjectType("BookingGroupBy", {
  simpleResolvers: true
})
export class BookingGroupBy {
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
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  time!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  persons!: number;

  @TypeGraphQL.Field(_type => BookingStatus, {
    nullable: false
  })
  status!: "PENDING" | "CONFIRMED" | "CANCELLED";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  affiliateUrl!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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
