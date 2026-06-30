import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("FollowerScalarWhereInput", {})
export class FollowerScalarWhereInput {
  @TypeGraphQL.Field(_type => [FollowerScalarWhereInput], {
    nullable: true
  })
  AND?: FollowerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereInput], {
    nullable: true
  })
  OR?: FollowerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarWhereInput], {
    nullable: true
  })
  NOT?: FollowerScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  followerId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
