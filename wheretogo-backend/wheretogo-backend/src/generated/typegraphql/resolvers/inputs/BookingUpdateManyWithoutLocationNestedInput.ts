import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookingCreateManyLocationInputEnvelope } from "../inputs/BookingCreateManyLocationInputEnvelope";
import { BookingCreateOrConnectWithoutLocationInput } from "../inputs/BookingCreateOrConnectWithoutLocationInput";
import { BookingCreateWithoutLocationInput } from "../inputs/BookingCreateWithoutLocationInput";
import { BookingScalarWhereInput } from "../inputs/BookingScalarWhereInput";
import { BookingUpdateManyWithWhereWithoutLocationInput } from "../inputs/BookingUpdateManyWithWhereWithoutLocationInput";
import { BookingUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/BookingUpdateWithWhereUniqueWithoutLocationInput";
import { BookingUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/BookingUpsertWithWhereUniqueWithoutLocationInput";
import { BookingWhereUniqueInput } from "../inputs/BookingWhereUniqueInput";

@TypeGraphQL.InputType("BookingUpdateManyWithoutLocationNestedInput", {})
export class BookingUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [BookingCreateWithoutLocationInput], {
    nullable: true
  })
  create?: BookingCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: BookingCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: BookingUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => BookingCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: BookingCreateManyLocationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [BookingUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: BookingUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: BookingUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookingScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookingScalarWhereInput[] | undefined;
}
