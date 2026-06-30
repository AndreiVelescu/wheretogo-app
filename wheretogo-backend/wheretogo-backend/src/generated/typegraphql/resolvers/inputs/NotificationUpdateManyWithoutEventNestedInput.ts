import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyEventInputEnvelope } from "../inputs/NotificationCreateManyEventInputEnvelope";
import { NotificationCreateOrConnectWithoutEventInput } from "../inputs/NotificationCreateOrConnectWithoutEventInput";
import { NotificationCreateWithoutEventInput } from "../inputs/NotificationCreateWithoutEventInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutEventInput } from "../inputs/NotificationUpdateManyWithWhereWithoutEventInput";
import { NotificationUpdateWithWhereUniqueWithoutEventInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutEventInput";
import { NotificationUpsertWithWhereUniqueWithoutEventInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutEventInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateManyWithoutEventNestedInput", {})
export class NotificationUpdateManyWithoutEventNestedInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutEventInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutEventInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutEventInput], {
    nullable: true
  })
  upsert?: NotificationUpsertWithWhereUniqueWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyEventInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyEventInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutEventInput], {
    nullable: true
  })
  update?: NotificationUpdateWithWhereUniqueWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutEventInput], {
    nullable: true
  })
  updateMany?: NotificationUpdateManyWithWhereWithoutEventInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationScalarWhereInput[] | undefined;
}
