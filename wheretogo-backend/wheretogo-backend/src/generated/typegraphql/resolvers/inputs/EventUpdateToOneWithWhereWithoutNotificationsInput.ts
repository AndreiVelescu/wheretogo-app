import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventUpdateWithoutNotificationsInput } from "../inputs/EventUpdateWithoutNotificationsInput";
import { EventWhereInput } from "../inputs/EventWhereInput";

@TypeGraphQL.InputType("EventUpdateToOneWithWhereWithoutNotificationsInput", {})
export class EventUpdateToOneWithWhereWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  where?: EventWhereInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateWithoutNotificationsInput, {
    nullable: false
  })
  data!: EventUpdateWithoutNotificationsInput;
}
