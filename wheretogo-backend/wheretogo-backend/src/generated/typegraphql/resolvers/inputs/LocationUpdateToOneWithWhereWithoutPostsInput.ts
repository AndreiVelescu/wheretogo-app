import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationUpdateWithoutPostsInput } from "../inputs/LocationUpdateWithoutPostsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";

@TypeGraphQL.InputType("LocationUpdateToOneWithWhereWithoutPostsInput", {})
export class LocationUpdateToOneWithWhereWithoutPostsInput {
  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  where?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateWithoutPostsInput, {
    nullable: false
  })
  data!: LocationUpdateWithoutPostsInput;
}
