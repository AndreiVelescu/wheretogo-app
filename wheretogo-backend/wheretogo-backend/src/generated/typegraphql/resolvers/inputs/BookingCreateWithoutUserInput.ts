import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateNestedOneWithoutBookingsInput } from "../inputs/LocationCreateNestedOneWithoutBookingsInput";
import { BookingStatus } from "../../enums/BookingStatus";

@TypeGraphQL.InputType("BookingCreateWithoutUserInput", {})
export class BookingCreateWithoutUserInput {
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
    nullable: true
  })
  status?: "PENDING" | "CONFIRMED" | "CANCELLED" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  affiliateUrl?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutBookingsInput, {
    nullable: false
  })
  location!: LocationCreateNestedOneWithoutBookingsInput;
}
