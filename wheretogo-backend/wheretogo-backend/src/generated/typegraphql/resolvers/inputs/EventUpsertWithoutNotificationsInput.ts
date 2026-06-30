import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateWithoutNotificationsInput } from "../inputs/EventCreateWithoutNotificationsInput";
import { EventUpdateWithoutNotificationsInput } from "../inputs/EventUpdateWithoutNotificationsInput";
import { EventWhereInput } from "../inputs/EventWhereInput";

@TypeGraphQL.InputType("EventUpsertWithoutNotificationsInput", {})
export class EventUpsertWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => EventUpdateWithoutNotificationsInput, {
    nullable: false
  })
  update!: EventUpdateWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => EventCreateWithoutNotificationsInput, {
    nullable: false
  })
  create!: EventCreateWithoutNotificationsInput;

  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  where?: EventWhereInput | undefined;
}
