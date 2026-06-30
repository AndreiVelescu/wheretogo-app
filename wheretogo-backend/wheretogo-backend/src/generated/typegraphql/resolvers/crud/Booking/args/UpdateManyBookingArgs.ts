import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookingUpdateManyMutationInput } from "../../../inputs/BookingUpdateManyMutationInput";
import { BookingWhereInput } from "../../../inputs/BookingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookingArgs {
  @TypeGraphQL.Field(_type => BookingUpdateManyMutationInput, {
    nullable: false
  })
  data!: BookingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => BookingWhereInput, {
    nullable: true
  })
  where?: BookingWhereInput | undefined;
}
