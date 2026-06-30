import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostCreateWithoutUserInput } from "../inputs/SavedPostCreateWithoutUserInput";
import { SavedPostWhereUniqueInput } from "../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.InputType("SavedPostCreateOrConnectWithoutUserInput", {})
export class SavedPostCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => SavedPostWhereUniqueInput, {
    nullable: false
  })
  where!: SavedPostWhereUniqueInput;

  @TypeGraphQL.Field(_type => SavedPostCreateWithoutUserInput, {
    nullable: false
  })
  create!: SavedPostCreateWithoutUserInput;
}
