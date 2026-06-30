import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyTripInput } from "../inputs/NotificationCreateManyTripInput";

@TypeGraphQL.InputType("NotificationCreateManyTripInputEnvelope", {})
export class NotificationCreateManyTripInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationCreateManyTripInput], {
    nullable: false
  })
  data!: NotificationCreateManyTripInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
