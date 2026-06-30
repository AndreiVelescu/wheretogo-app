import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostCreateWithoutUserInput } from "../inputs/SavedPostCreateWithoutUserInput";
import { SavedPostUpdateWithoutUserInput } from "../inputs/SavedPostUpdateWithoutUserInput";
import { SavedPostWhereUniqueInput } from "../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.InputType("SavedPostUpsertWithWhereUniqueWithoutUserInput", {})
export class SavedPostUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SavedPostWhereUniqueInput, {
    nullable: false
  })
  where!: SavedPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => SavedPostUpdateWithoutUserInput, {
    nullable: false
  })
  update!: SavedPostUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => SavedPostCreateWithoutUserInput, {
    nullable: false
  })
  create!: SavedPostCreateWithoutUserInput;
}
