import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateWithoutPostsInput } from "../inputs/LocationCreateWithoutPostsInput";
import { LocationUpdateWithoutPostsInput } from "../inputs/LocationUpdateWithoutPostsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpsertWithoutPostsInput", {})
export class LocationUpsertWithoutPostsInput {
  @TypeGraphQL.Field(_type => LocationUpdateWithoutPostsInput, {
    nullable: false
  })
  update!: LocationUpdateWithoutPostsInput;

  @TypeGraphQL.Field(_type => LocationCreateWithoutPostsInput, {
    nullable: false
  })
  create!: LocationCreateWithoutPostsInput;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;
}
