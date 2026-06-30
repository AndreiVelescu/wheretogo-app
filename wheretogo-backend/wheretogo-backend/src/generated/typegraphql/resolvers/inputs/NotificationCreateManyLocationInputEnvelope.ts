import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyLocationInput } from "../inputs/NotificationCreateManyLocationInput";

@TypeGraphQL.InputType("NotificationCreateManyLocationInputEnvelope", {})
export class NotificationCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [NotificationCreateManyLocationInput], {
    nullable: false
  })
  data!: NotificationCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
