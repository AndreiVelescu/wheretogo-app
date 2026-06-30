import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumPlatformWithAggregatesFilter } from "../inputs/EnumPlatformWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("DeviceTokenScalarWhereWithAggregatesInput", {})
export class DeviceTokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [DeviceTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: DeviceTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: DeviceTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeviceTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: DeviceTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  token?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumPlatformWithAggregatesFilter, {
    nullable: true
  })
  platform?: EnumPlatformWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  isActive?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
