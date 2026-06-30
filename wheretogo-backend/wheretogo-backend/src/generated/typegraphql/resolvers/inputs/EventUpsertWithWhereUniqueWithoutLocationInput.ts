import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutLocationInput } from "../inputs/EventCreateWithoutLocationInput";
import { EventUpdateWithoutLocationInput } from "../inputs/EventUpdateWithoutLocationInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpsertWithWhereUniqueWithoutLocationInput", {})
export class EventUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: false
  })
  where!: EventWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: EventUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutLocationInput, {
    nullable: false
  })
  create!: EventCreateWithoutLocationInput;
}
