import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingWhereInput } from "../inputs/BookingWhereInput";

@TypeGraphQL.InputType("BookingListRelationFilter", {})
export class BookingListRelationFilter {
  @TypeGraphQL.Field(_type => BookingWhereInput, {
    nullable: true
  })
  every?: BookingWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookingWhereInput, {
    nullable: true
  })
  some?: BookingWhereInput | undefined;

  @TypeGraphQL.Field(_type => BookingWhereInput, {
    nullable: true
  })
  none?: BookingWhereInput | undefined;
}
