import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostUpdateWithoutPostInput } from "../inputs/SavedPostUpdateWithoutPostInput";
import { SavedPostWhereUniqueInput } from "../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.InputType("SavedPostUpdateWithWhereUniqueWithoutPostInput", {})
export class SavedPostUpdateWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field(_type => SavedPostWhereUniqueInput, {
    nullable: false
  })
  where!: SavedPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => SavedPostUpdateWithoutPostInput, {
    nullable: false
  })
  data!: SavedPostUpdateWithoutPostInput;
}
