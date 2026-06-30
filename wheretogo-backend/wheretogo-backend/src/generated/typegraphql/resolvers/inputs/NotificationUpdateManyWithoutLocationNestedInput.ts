import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyLocationInputEnvelope } from "../inputs/NotificationCreateManyLocationInputEnvelope";
import { NotificationCreateOrConnectWithoutLocationInput } from "../inputs/NotificationCreateOrConnectWithoutLocationInput";
import { NotificationCreateWithoutLocationInput } from "../inputs/NotificationCreateWithoutLocationInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutLocationInput } from "../inputs/NotificationUpdateManyWithWhereWithoutLocationInput";
import { NotificationUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutLocationInput";
import { NotificationUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutLocationInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateManyWithoutLocationNestedInput", {})
export class NotificationUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutLocationInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: NotificationUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyLocationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: NotificationUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: NotificationUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationScalarWhereInput[] | undefined;
}
