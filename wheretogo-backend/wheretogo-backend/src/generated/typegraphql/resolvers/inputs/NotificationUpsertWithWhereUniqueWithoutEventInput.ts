import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateWithoutEventInput } from "../inputs/NotificationCreateWithoutEventInput";
import { NotificationUpdateWithoutEventInput } from "../inputs/NotificationUpdateWithoutEventInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutEventInput", {})
export class NotificationUpsertWithWhereUniqueWithoutEventInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutEventInput, {
    nullable: false
  })
  update!: NotificationUpdateWithoutEventInput;

  @TypeGraphQL.Field(_type => NotificationCreateWithoutEventInput, {
    nullable: false
  })
  create!: NotificationCreateWithoutEventInput;
}
