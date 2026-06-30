import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyLocationInputEnvelope } from "../inputs/NotificationCreateManyLocationInputEnvelope";
import { NotificationCreateOrConnectWithoutLocationInput } from "../inputs/NotificationCreateOrConnectWithoutLocationInput";
import { NotificationCreateWithoutLocationInput } from "../inputs/NotificationCreateWithoutLocationInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationCreateNestedManyWithoutLocationInput", {})
export class NotificationCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutLocationInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;
}
