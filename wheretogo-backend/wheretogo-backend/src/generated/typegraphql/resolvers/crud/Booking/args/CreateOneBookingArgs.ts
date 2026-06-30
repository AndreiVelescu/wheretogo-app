import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookingCreateInput } from "../../../inputs/BookingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBookingArgs {
  @TypeGraphQL.Field(_type => BookingCreateInput, {
    nullable: false
  })
  data!: BookingCreateInput;
}
