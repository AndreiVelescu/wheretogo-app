import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripUpdateWithoutPostsInput } from "../inputs/TripUpdateWithoutPostsInput";
import { TripWhereInput } from "../inputs/TripWhereInput";

@TypeGraphQL.InputType("TripUpdateToOneWithWhereWithoutPostsInput", {})
export class TripUpdateToOneWithWhereWithoutPostsInput {
  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  where?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateWithoutPostsInput, {
    nullable: false
  })
  data!: TripUpdateWithoutPostsInput;
}
