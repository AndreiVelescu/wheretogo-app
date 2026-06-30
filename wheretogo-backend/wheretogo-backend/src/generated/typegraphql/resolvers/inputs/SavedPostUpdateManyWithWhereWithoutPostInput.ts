import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostScalarWhereInput } from "../inputs/SavedPostScalarWhereInput";
import { SavedPostUpdateManyMutationInput } from "../inputs/SavedPostUpdateManyMutationInput";

@TypeGraphQL.InputType("SavedPostUpdateManyWithWhereWithoutPostInput", {})
export class SavedPostUpdateManyWithWhereWithoutPostInput {
  @TypeGraphQL.Field(_type => SavedPostScalarWhereInput, {
    nullable: false
  })
  where!: SavedPostScalarWhereInput;

  @TypeGraphQL.Field(_type => SavedPostUpdateManyMutationInput, {
    nullable: false
  })
  data!: SavedPostUpdateManyMutationInput;
}
