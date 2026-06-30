import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostUpdateWithoutUserInput } from "../inputs/SavedPostUpdateWithoutUserInput";
import { SavedPostWhereUniqueInput } from "../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.InputType("SavedPostUpdateWithWhereUniqueWithoutUserInput", {})
export class SavedPostUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => SavedPostWhereUniqueInput, {
    nullable: false
  })
  where!: SavedPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => SavedPostUpdateWithoutUserInput, {
    nullable: false
  })
  data!: SavedPostUpdateWithoutUserInput;
}
