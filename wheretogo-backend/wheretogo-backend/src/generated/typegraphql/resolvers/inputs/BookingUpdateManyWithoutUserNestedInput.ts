import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingCreateManyUserInputEnvelope } from "../inputs/BookingCreateManyUserInputEnvelope";
import { BookingCreateOrConnectWithoutUserInput } from "../inputs/BookingCreateOrConnectWithoutUserInput";
import { BookingCreateWithoutUserInput } from "../inputs/BookingCreateWithoutUserInput";
import { BookingScalarWhereInput } from "../inputs/BookingScalarWhereInput";
import { BookingUpdateManyWithWhereWithoutUserInput } from "../inputs/BookingUpdateManyWithWhereWithoutUserInput";
import { BookingUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BookingUpdateWithWhereUniqueWithoutUserInput";
import { BookingUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BookingUpsertWithWhereUniqueWithoutUserInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType("BookingUpdateManyWithoutUserNestedInput", {})
export class BookingUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [BookingCreateWithoutUserInput], {
    nullable: true
  })
  create?: BookingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: BookingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: BookingUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => BookingCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: BookingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookingWhereUniqueInput], {
    nullable: true
  })
  set?: BookingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingWhereUniqueInput], {
    nullable: true
  })
  delete?: BookingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingWhereUniqueInput], {
    nullable: true
  })
  connect?: BookingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: BookingUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: BookingUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookingScalarWhereInput[] | undefined;
}
