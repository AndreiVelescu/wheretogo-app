import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteCreateManyUserInput } from "../inputs/FavoriteCreateManyUserInput";

@TypeGraphQL.InputType("FavoriteCreateManyUserInputEnvelope", {})
export class FavoriteCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [FavoriteCreateManyUserInput], {
    nullable: false
  })
  data!: FavoriteCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
