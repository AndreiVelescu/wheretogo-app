import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateOrConnectWithoutNotificationsInput } from "../inputs/EventCreateOrConnectWithoutNotificationsInput";
import { EventCreateWithoutNotificationsInput } from "../inputs/EventCreateWithoutNotificationsInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventCreateNestedOneWithoutNotificationsInput", {})
export class EventCreateNestedOneWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => EventCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: EventCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => EventCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: true
  })
  connect?: EventWhereUniqueInput | undefined;
}
