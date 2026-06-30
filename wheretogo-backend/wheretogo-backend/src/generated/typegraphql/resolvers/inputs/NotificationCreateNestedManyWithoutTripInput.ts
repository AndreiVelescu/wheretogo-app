import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyTripInputEnvelope } from "../inputs/NotificationCreateManyTripInputEnvelope";
import { NotificationCreateOrConnectWithoutTripInput } from "../inputs/NotificationCreateOrConnectWithoutTripInput";
import { NotificationCreateWithoutTripInput } from "../inputs/NotificationCreateWithoutTripInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateNestedManyWithoutTripInput", {})
export class NotificationCreateNestedManyWithoutTripInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutTripInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyTripInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;
}
