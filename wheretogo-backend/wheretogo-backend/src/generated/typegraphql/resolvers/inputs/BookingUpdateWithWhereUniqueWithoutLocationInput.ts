import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingUpdateWithoutLocationInput } from "../inputs/BookingUpdateWithoutLocationInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType("BookingUpdateWithWhereUniqueWithoutLocationInput", {})
export class BookingUpdateWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, {
    nullable: false
  })
  where!: BookingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookingUpdateWithoutLocationInput, {
    nullable: false
  })
  data!: BookingUpdateWithoutLocationInput;
}
