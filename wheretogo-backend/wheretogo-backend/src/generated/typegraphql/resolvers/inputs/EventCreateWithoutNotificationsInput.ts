import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateNestedOneWithoutEventsInput } from "../inputs/LocationCreateNestedOneWithoutEventsInput";

@TypeGraphQL.InputType("EventCreateWithoutNotificationsInput", {})
export class EventCreateWithoutNotificationsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  notify?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => LocationCreateNestedOneWithoutEventsInput, {
    nullable: false
  })
  location!: LocationCreateNestedOneWithoutEventsInput;
}
