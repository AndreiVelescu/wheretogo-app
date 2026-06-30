import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostCreateManyUserInput } from "../inputs/SavedPostCreateManyUserInput";

@TypeGraphQL.InputType("SavedPostCreateManyUserInputEnvelope", {})
export class SavedPostCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [SavedPostCreateManyUserInput], {
    nullable: false
  })
  data!: SavedPostCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
