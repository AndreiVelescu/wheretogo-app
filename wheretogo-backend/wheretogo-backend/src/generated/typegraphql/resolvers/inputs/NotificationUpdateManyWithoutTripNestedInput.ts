import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyTripInputEnvelope } from "../inputs/NotificationCreateManyTripInputEnvelope";
import { NotificationCreateOrConnectWithoutTripInput } from "../inputs/NotificationCreateOrConnectWithoutTripInput";
import { NotificationCreateWithoutTripInput } from "../inputs/NotificationCreateWithoutTripInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutTripInput } from "../inputs/NotificationUpdateManyWithWhereWithoutTripInput";
import { NotificationUpdateWithWhereUniqueWithoutTripInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutTripInput";
import { NotificationUpsertWithWhereUniqueWithoutTripInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutTripInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateManyWithoutTripNestedInput", {})
export class NotificationUpdateManyWithoutTripNestedInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutTripInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutTripInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  upsert?: NotificationUpsertWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyTripInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyTripInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  set?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  delete?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutTripInput], {
    nullable: true
  })
  update?: NotificationUpdateWithWhereUniqueWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutTripInput], {
    nullable: true
  })
  updateMany?: NotificationUpdateManyWithWhereWithoutTripInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationScalarWhereInput[] | undefined;
}
