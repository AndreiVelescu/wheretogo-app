import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingCreateManyLocationInputEnvelope } from "../inputs/BookingCreateManyLocationInputEnvelope";
import { BookingCreateOrConnectWithoutLocationInput } from "../inputs/BookingCreateOrConnectWithoutLocationInput";
import { BookingCreateWithoutLocationInput } from "../inputs/BookingCreateWithoutLocationInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType("BookingCreateNestedManyWithoutLocationInput", {})
export class BookingCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [BookingCreateWithoutLocationInput], {
    nullable: true
  })
  create?: BookingCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: BookingCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => BookingCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: BookingCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookingWhereUniqueInput], {
    nullable: true
  })
  connect?: BookingWhereUniqueInput[] | undefined;
}
