import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DeviceTokenWhereInput } from "../inputs/DeviceTokenWhereInput";
import { EnumPlatformFilter } from "../inputs/EnumPlatformFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("DeviceTokenWhereUniqueInput", {})
export class DeviceTokenWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenWhereInput], {
    nullable: true
  })
  AND?: DeviceTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenWhereInput], {
    nullable: true
  })
  OR?: DeviceTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenWhereInput], {
    nullable: true
  })
  NOT?: DeviceTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPlatformFilter, {
    nullable: true
  })
  platform?: EnumPlatformFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isActive?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;
}
