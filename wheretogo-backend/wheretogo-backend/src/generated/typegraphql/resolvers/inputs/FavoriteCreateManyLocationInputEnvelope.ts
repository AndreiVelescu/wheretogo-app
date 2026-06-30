import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FavoriteCreateManyLocationInput } from "../inputs/FavoriteCreateManyLocationInput";

@TypeGraphQL.InputType("FavoriteCreateManyLocationInputEnvelope", {})
export class FavoriteCreateManyLocationInputEnvelope {
  @TypeGraphQL.Field(_type => [FavoriteCreateManyLocationInput], {
    nullable: false
  })
  data!: FavoriteCreateManyLocationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
