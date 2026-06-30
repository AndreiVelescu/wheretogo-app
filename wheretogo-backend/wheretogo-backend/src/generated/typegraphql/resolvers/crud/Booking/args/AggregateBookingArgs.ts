import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BookingOrderByWithRelationInput } from "../../../inputs/BookingOrderByWithRelationInput";
import { BookingWhereInput } from "../../../inputs/BookingWhereInput";
import { BookingWhereUniqueInput } from "../../../inputs/BookingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBookingArgs {
  @TypeGraphQL.Field(_type => BookingWhereInput, {
    nullable: true
  })
  where?: BookingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [BookingOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: BookingOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => BookingWhereUniqueInput, {
    nullable: true
  })
  cursor?: BookingWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
