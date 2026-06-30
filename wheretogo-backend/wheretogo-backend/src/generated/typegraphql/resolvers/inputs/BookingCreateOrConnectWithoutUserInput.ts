import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingCreateWithoutUserInput } from "../inputs/BookingCreateWithoutUserInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType("BookingCreateOrConnectWithoutUserInput", {})
export class BookingCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, {
    nullable: false
  })
  where!: BookingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookingCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookingCreateWithoutUserInput;
}
