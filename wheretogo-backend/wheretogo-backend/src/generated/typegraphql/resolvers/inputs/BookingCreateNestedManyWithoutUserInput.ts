import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingCreateManyUserInputEnvelope } from "../inputs/BookingCreateManyUserInputEnvelope";
import { BookingCreateOrConnectWithoutUserInput } from "../inputs/BookingCreateOrConnectWithoutUserInput";
import { BookingCreateWithoutUserInput } from "../inputs/BookingCreateWithoutUserInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType("BookingCreateNestedManyWithoutUserInput", {})
export class BookingCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [BookingCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookingWhereUniqueInput], {
    nullable: true
  })
  connect?: BookingWhereUniqueInput[] | undefined;
}
