import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostShareWhereInput } from "../inputs/PostShareWhereInput";

@TypeGraphQL.InputType("PostShareListRelationFilter", {})
export class PostShareListRelationFilter {
  @TypeGraphQL.Field(_type => PostShareWhereInput, {
    nullable: true
  })
  every?: PostShareWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostShareWhereInput, {
    nullable: true
  })
  some?: PostShareWhereInput | undefined;

  @TypeGraphQL.Field(_type => PostShareWhereInput, {
    nullable: true
  })
  none?: PostShareWhereInput | undefined;
}
