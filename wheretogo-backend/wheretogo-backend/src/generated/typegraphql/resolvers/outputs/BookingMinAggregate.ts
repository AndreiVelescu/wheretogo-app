import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingStatus } from "../../enums/BookingStatus";

@TypeGraphQL.ObjectType("BookingMinAggregate", {
  simpleResolvers: true
})
export class BookingMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  locationId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  time!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  persons!: number | null;

  @TypeGraphQL.Field(_type => BookingStatus, {
    nullable: true
  })
  status!: "PENDING" | "CONFIRMED" | "CANCELLED" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  affiliateUrl!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
