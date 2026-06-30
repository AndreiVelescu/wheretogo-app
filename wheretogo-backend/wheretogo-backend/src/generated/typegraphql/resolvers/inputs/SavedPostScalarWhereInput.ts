import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SavedPostScalarWhereInput", {})
export class SavedPostScalarWhereInput {
  @TypeGraphQL.Field(_type => [SavedPostScalarWhereInput], {
    nullable: true
  })
  AND?: SavedPostScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostScalarWhereInput], {
    nullable: true
  })
  OR?: SavedPostScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostScalarWhereInput], {
    nullable: true
  })
  NOT?: SavedPostScalarWhereInput[] | undefined;

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
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  note?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
