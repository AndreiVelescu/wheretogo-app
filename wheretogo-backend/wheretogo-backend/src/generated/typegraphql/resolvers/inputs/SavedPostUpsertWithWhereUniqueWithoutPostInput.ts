import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostCreateWithoutPostInput } from "../inputs/SavedPostCreateWithoutPostInput";
import { SavedPostUpdateWithoutPostInput } from "../inputs/SavedPostUpdateWithoutPostInput";
import { SavedPostWhereUniqueInput } from "../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.InputType("SavedPostUpsertWithWhereUniqueWithoutPostInput", {})
export class SavedPostUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => SavedPostWhereUniqueInput, {
    nullable: false
  })
  where!: SavedPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => SavedPostUpdateWithoutPostInput, {
    nullable: false
  })
  update!: SavedPostUpdateWithoutPostInput;

  @TypeGraphQL.Field(_type => SavedPostCreateWithoutPostInput, {
    nullable: false
  })
  create!: SavedPostCreateWithoutPostInput;
}
