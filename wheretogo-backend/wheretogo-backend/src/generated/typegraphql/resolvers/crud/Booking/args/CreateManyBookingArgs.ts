import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookingCreateManyInput } from "../../../inputs/BookingCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookingArgs {
  @TypeGraphQL.Field(_type => [BookingCreateManyInput], {
    nullable: false
  })
  data!: BookingCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
