import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyLocationInputEnvelope } from "../inputs/EventCreateManyLocationInputEnvelope";
import { EventCreateOrConnectWithoutLocationInput } from "../inputs/EventCreateOrConnectWithoutLocationInput";
import { EventCreateWithoutLocationInput } from "../inputs/EventCreateWithoutLocationInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateNestedManyWithoutLocationInput", {})
export class EventCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [EventCreateWithoutLocationInput], {
    nullable: true
  })
  create?: EventCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => EventCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: EventCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EventWhereUniqueInput], {
    nullable: true
  })
  connect?: EventWhereUniqueInput[] | undefined;
}
