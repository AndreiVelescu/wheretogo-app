import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingUpdateWithoutUserInput } from "../inputs/BookingUpdateWithoutUserInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType("BookingUpdateWithWhereUniqueWithoutUserInput", {})
export class BookingUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, {
    nullable: false
  })
  where!: BookingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookingUpdateWithoutUserInput, {
    nullable: false
  })
  data!: BookingUpdateWithoutUserInput;
}
