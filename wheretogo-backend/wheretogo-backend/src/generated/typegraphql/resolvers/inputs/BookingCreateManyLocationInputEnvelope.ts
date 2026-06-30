import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingCreateManyLocationInput } from "../inputs/BookingCreateManyLocationInput";

@TypeGraphQL.InputType("BookingCreateManyLocationInputEnvelope", {})
export class BookingCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [BookingCreateManyLocationInput], {
    nullable: false
  })
  data!: BookingCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
