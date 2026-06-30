import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookingWhereInput } from "../../inputs/BookingWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountBookingsArgs {
  @TypeGraphQL.Field(_type => BookingWhereInput, {
    nullable: true
  })
  where?: BookingWhereInput | undefined;
}
