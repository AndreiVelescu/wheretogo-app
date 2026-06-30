import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostCreateWithoutPostInput } from "../inputs/SavedPostCreateWithoutPostInput";
import { SavedPostWhereUniqueInput } from "../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.InputType("SavedPostCreateOrConnectWithoutPostInput", {})
export class SavedPostCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field(_type => SavedPostWhereUniqueInput, {
    nullable: false
  })
  where!: SavedPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => SavedPostCreateWithoutPostInput, {
    nullable: false
  })
  create!: SavedPostCreateWithoutPostInput;
}
