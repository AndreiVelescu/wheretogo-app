import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateWithoutLocationInput } from "../inputs/NotificationCreateWithoutLocationInput";
import { NotificationUpdateWithoutLocationInput } from "../inputs/NotificationUpdateWithoutLocationInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutLocationInput", {})
export class NotificationUpsertWithWhereUniqueWithoutLocationInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutLocationInput, {
    nullable: false
  })
  update!: NotificationUpdateWithoutLocationInput;

  @TypeGraphQL.Field(_type => NotificationCreateWithoutLocationInput, {
    nullable: false
  })
  create!: NotificationCreateWithoutLocationInput;
}
