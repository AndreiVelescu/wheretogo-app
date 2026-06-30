import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutReviewsInput } from "../inputs/LocationCreateOrConnectWithoutReviewsInput";
import { LocationCreateWithoutReviewsInput } from "../inputs/LocationCreateWithoutReviewsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedOneWithoutReviewsInput", {})
export class LocationCreateNestedOneWithoutReviewsInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;
}
