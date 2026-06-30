import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostCreateManyPostInput } from "../inputs/SavedPostCreateManyPostInput";

@TypeGraphQL.InputType("SavedPostCreateManyPostInputEnvelope", {})
export class SavedPostCreateManyPostInputEnvelope {
  @TypeGraphQL.Field(_type => [SavedPostCreateManyPostInput], {
    nullable: false
  })
  data!: SavedPostCreateManyPostInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
