import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Location } from "../models/Location";
import { User } from "../models/User";
import { BookingStatus } from "../enums/BookingStatus";

@TypeGraphQL.ObjectType("Booking", {
  simpleResolvers: true
})
export class Booking {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  location?: Location;

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
  affiliateUrl?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;
}
