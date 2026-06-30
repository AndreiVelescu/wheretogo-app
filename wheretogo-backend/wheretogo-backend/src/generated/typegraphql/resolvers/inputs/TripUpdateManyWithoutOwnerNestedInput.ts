import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateManyOwnerInputEnvelope } from "../inputs/TripCreateManyOwnerInputEnvelope";
import { TripCreateOrConnectWithoutOwnerInput } from "../inputs/TripCreateOrConnectWithoutOwnerInput";
import { TripCreateWithoutOwnerInput } from "../inputs/TripCreateWithoutOwnerInput";
import { TripScalarWhereInput } from "../inputs/TripScalarWhereInput";
import { TripUpdateManyWithWhereWithoutOwnerInput } from "../inputs/TripUpdateManyWithWhereWithoutOwnerInput";
import { TripUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/TripUpdateWithWhereUniqueWithoutOwnerInput";
import { TripUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/TripUpsertWithWhereUniqueWithoutOwnerInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateManyWithoutOwnerNestedInput", {})
export class TripUpdateManyWithoutOwnerNestedInput {
  @TypeGraphQL.Field(_type => [TripCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: TripCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: TripUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => TripCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: TripCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  set?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  delete?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripWhereUniqueInput], {
    nullable: true
  })
  connect?: TripWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: TripUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: TripUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [TripScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TripScalarWhereInput[] | undefined;
}
