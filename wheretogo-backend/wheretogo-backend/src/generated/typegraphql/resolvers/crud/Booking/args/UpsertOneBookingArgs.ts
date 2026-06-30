import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookingCreateInput } from "../../../inputs/BookingCreateInput";
import { BookingUpdateInput } from "../../../inputs/BookingUpdateInput";
import { BookingWhereUniqueInput } from "../../../inputs/BookingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBookingArgs {
  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, {
    nullable: false
  })
  where!: BookingWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookingCreateInput, {
    nullable: false
  })
  create!: BookingCreateInput;

  @TypeGraphQL.Field(_type => BookingUpdateInput, {
    nullable: false
  })
  update!: BookingUpdateInput;
}
