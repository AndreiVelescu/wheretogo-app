import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookingUpdateInput } from "../../../inputs/BookingUpdateInput";
import { BookingWhereUniqueInput } from "../../../inputs/BookingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBookingArgs {
  @TypeGraphQL.Field(_type => BookingUpdateInput, {
    nullable: false
  })
  data!: BookingUpdateInput;

  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, {
    nullable: false
  })
  where!: BookingWhereUniqueInput;
}
