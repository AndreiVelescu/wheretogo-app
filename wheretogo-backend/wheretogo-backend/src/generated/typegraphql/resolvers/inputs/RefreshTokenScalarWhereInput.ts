import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RefreshTokenScalarWhereInput", {})
export class RefreshTokenScalarWhereInput {
  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereInput], {
    nullable: true
  })
  AND?: RefreshTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereInput], {
    nullable: true
  })
  OR?: RefreshTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RefreshTokenScalarWhereInput], {
    nullable: true
  })
  NOT?: RefreshTokenScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expiresAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
