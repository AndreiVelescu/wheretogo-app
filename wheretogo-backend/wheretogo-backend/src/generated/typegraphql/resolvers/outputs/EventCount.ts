import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCountNotificationsArgs } from "./args/EventCountNotificationsArgs";

@TypeGraphQL.ObjectType("EventCount", {
  simpleResolvers: true
})
export class EventCount {
  notifications!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "notifications",
    nullable: false
  })
  getNotifications(@TypeGraphQL.Root() root: EventCount, @TypeGraphQL.Args() args: EventCountNotificationsArgs): number {
    return root.notifications;
  }
}
