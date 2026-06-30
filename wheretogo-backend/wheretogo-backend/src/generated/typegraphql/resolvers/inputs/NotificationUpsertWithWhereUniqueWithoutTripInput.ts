import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateWithoutTripInput } from "../inputs/NotificationCreateWithoutTripInput";
import { NotificationUpdateWithoutTripInput } from "../inputs/NotificationUpdateWithoutTripInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpsertWithWhereUniqueWithoutTripInput", {})
export class NotificationUpsertWithWhereUniqueWithoutTripInput {
  @TypeGraphQL.Field(_type => NotificationWhereUniqueInput, {
    nullable: false
  })
  where!: NotificationWhereUniqueInput;

  @TypeGraphQL.Field(_type => NotificationUpdateWithoutTripInput, {
    nullable: false
  })
  update!: NotificationUpdateWithoutTripInput;

  @TypeGraphQL.Field(_type => NotificationCreateWithoutTripInput, {
    nullable: false
  })
  create!: NotificationCreateWithoutTripInput;
}
