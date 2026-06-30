import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPlatformFilter } from "../inputs/EnumPlatformFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("DeviceTokenScalarWhereInput", {})
export class DeviceTokenScalarWhereInput {
  @TypeGraphQL.Field(_type => [DeviceTokenScalarWhereInput], {
    nullable: true
  })
  AND?: DeviceTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenScalarWhereInput], {
    nullable: true
  })
  OR?: DeviceTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenScalarWhereInput], {
    nullable: true
  })
  NOT?: DeviceTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;

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
}
