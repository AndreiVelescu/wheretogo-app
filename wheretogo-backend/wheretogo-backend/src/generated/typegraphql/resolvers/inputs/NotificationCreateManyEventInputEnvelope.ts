import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyEventInput } from "../inputs/NotificationCreateManyEventInput";

@TypeGraphQL.InputType("NotificationCreateManyEventInputEnvelope", {})
export class NotificationCreateManyEventInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationCreateManyEventInput], {
    nullable: false
  })
  data!: NotificationCreateManyEventInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
