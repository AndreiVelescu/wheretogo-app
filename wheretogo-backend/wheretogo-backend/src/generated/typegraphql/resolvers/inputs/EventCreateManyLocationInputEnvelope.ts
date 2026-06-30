import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventCreateManyLocationInput } from "../inputs/EventCreateManyLocationInput";

@TypeGraphQL.InputType("EventCreateManyLocationInputEnvelope", {})
export class EventCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [EventCreateManyLocationInput], {
    nullable: false
  })
  data!: EventCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
