import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateOrConnectWithoutNotificationsInput } from "../inputs/EventCreateOrConnectWithoutNotificationsInput";
import { EventCreateWithoutNotificationsInput } from "../inputs/EventCreateWithoutNotificationsInput";
import { EventUpdateToOneWithWhereWithoutNotificationsInput } from "../inputs/EventUpdateToOneWithWhereWithoutNotificationsInput";
import { EventUpsertWithoutNotificationsInput } from "../inputs/EventUpsertWithoutNotificationsInput";
import { EventWhereInput } from "../inputs/EventWhereInput";
import { EventWhereUniqueInput } from "../inputs/EventWhereUniqueInput";

@TypeGraphQL.InputType("EventUpdateOneWithoutNotificationsNestedInput", {})
export class EventUpdateOneWithoutNotificationsNestedInput {
  @TypeGraphQL.Field(_type => EventCreateWithoutNotificationsInput, {
    nullable: true
  })
  create?: EventCreateWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => EventCreateOrConnectWithoutNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: EventCreateOrConnectWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => EventUpsertWithoutNotificationsInput, {
    nullable: true
  })
  upsert?: EventUpsertWithoutNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  disconnect?: EventWhereInput | undefined;

  @TypeGraphQL.Field(_type => EventWhereInput, {
    nullable: true
  })
  delete?: EventWhereInput | undefined;

  @TypeGraphQL.Field(_type => EventWhereUniqueInput, {
    nullable: true
  })
  connect?: EventWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateToOneWithWhereWithoutNotificationsInput, {
    nullable: true
  })
  update?: EventUpdateToOneWithWhereWithoutNotificationsInput | undefined;
}
