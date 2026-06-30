import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateWithoutPostsInput } from "../inputs/TripCreateWithoutPostsInput";
import { TripUpdateWithoutPostsInput } from "../inputs/TripUpdateWithoutPostsInput";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripUpsertWithoutPostsInput", {})
export class TripUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => TripUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: TripUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => TripCreateWithoutPostsInput, {
    nullable: false
  })
  create!: TripCreateWithoutPostsInput;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;
}
