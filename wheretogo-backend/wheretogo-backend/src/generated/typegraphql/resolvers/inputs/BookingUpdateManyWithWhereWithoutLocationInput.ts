import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingScalarWhereInput } from "../inputs/BookingScalarWhereInput";
import { BookingUpdateManyMutationInput } from "../inputs/BookingUpdateManyMutationInput";

@TypeGraphQL.InputType("BookingUpdateManyWithWhereWithoutLocationInput", {})
export class BookingUpdateManyWithWhereWithoutLocationInput {
  @TypeGraphQL.Field(_type => BookingScalarWhereInput, {
    nullable: false
  })
  where!: BookingScalarWhereInput;

  @TypeGraphQL.Field(_type => BookingUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookingUpdateManyMutationInput;
}
