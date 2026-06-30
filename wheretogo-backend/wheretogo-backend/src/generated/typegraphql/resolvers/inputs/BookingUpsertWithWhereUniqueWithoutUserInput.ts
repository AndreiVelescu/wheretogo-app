import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingCreateWithoutUserInput } from "../inputs/BookingCreateWithoutUserInput";
import { BookingUpdateWithoutUserInput } from "../inputs/BookingUpdateWithoutUserInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType("BookingUpsertWithWhereUniqueWithoutUserInput", {})
export class BookingUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, {
    nullable: false
  })
  where!: BookingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookingUpdateWithoutUserInput, {
    nullable: false
  })
  update!: BookingUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => BookingCreateWithoutUserInput, {
    nullable: false
  })
  create!: BookingCreateWithoutUserInput;
}
