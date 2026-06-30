import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerWhereInput } from "../inputs/FollowerWhereInput";

@TypeGraphQL.InputType("FollowerListRelationFilter", {})
export class FollowerListRelationFilter {
  @TypeGraphQL.Field(_type => FollowerWhereInput, {
    nullable: true
  })
  every?: FollowerWhereInput | undefined;

  @TypeGraphQL.Field(_type => FollowerWhereInput, {
    nullable: true
  })
  some?: FollowerWhereInput | undefined;

  @TypeGraphQL.Field(_type => FollowerWhereInput, {
    nullable: true
  })
  none?: FollowerWhereInput | undefined;
}
