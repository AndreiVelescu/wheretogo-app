import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyEventInputEnvelope } from "../inputs/NotificationCreateManyEventInputEnvelope";
import { NotificationCreateOrConnectWithoutEventInput } from "../inputs/NotificationCreateOrConnectWithoutEventInput";
import { NotificationCreateWithoutEventInput } from "../inputs/NotificationCreateWithoutEventInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateNestedManyWithoutEventInput", {})
export class NotificationCreateNestedManyWithoutEventInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutEventInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutEventInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyEventInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyEventInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;
}
