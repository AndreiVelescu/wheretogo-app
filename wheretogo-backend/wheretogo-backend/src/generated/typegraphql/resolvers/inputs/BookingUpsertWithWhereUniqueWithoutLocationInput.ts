import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingCreateWithoutLocationInput } from "../inputs/BookingCreateWithoutLocationInput";
import { BookingUpdateWithoutLocationInput } from "../inputs/BookingUpdateWithoutLocationInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType("BookingUpsertWithWhereUniqueWithoutLocationInput", {})
export class BookingUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, {
    nullable: false
  })
  where!: BookingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookingUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: BookingUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => BookingCreateWithoutLocationInput, {
    nullable: false
  })
  create!: BookingCreateWithoutLocationInput;
}
