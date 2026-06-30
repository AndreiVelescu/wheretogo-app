import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateNestedManyWithoutEventInput } from "../inputs/NotificationCreateNestedManyWithoutEventInput";

@TypeGraphQL.InputType("EventCreateWithoutLocationInput", {})
export class EventCreateWithoutLocationInput {
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

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutEventInput, {
    nullable: true
  })
  notifications?: NotificationCreateNestedManyWithoutEventInput | undefined;
}
