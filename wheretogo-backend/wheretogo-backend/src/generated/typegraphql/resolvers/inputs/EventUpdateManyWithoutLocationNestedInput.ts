import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyLocationInputEnvelope } from "../inputs/EventCreateManyLocationInputEnvelope";
import { EventCreateOrConnectWithoutLocationInput } from "../inputs/EventCreateOrConnectWithoutLocationInput";
import { EventCreateWithoutLocationInput } from "../inputs/EventCreateWithoutLocationInput";
import { EventScalarWhereInput } from "../inputs/EventScalarWhereInput";
import { EventUpdateManyWithWhereWithoutLocationInput } from "../inputs/EventUpdateManyWithWhereWithoutLocationInput";
import { EventUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/EventUpdateWithWhereUniqueWithoutLocationInput";
import { EventUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/EventUpsertWithWhereUniqueWithoutLocationInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateManyWithoutLocationNestedInput", {})
export class EventUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutLocationInput], {
    nullable: true
  })
  create?: EventCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: EventUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  set?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  delete?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: EventUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: EventUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EventScalarWhereInput[] | undefined;
}
