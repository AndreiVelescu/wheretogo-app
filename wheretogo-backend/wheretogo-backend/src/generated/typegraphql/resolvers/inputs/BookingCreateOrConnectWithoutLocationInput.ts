import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingCreateWithoutLocationInput } from "../inputs/BookingCreateWithoutLocationInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType("BookingCreateOrConnectWithoutLocationInput", {})
export class BookingCreateOrConnectWithoutLocationInput {
  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, {
    nullable: false
  })
  where!: BookingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookingCreateWithoutLocationInput, {
    nullable: false
  })
  create!: BookingCreateWithoutLocationInput;
}
