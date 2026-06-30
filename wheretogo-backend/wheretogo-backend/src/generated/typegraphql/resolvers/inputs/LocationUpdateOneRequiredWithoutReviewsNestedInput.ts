import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutReviewsInput } from "../inputs/LocationCreateOrConnectWithoutReviewsInput";
import { LocationCreateWithoutReviewsInput } from "../inputs/LocationCreateWithoutReviewsInput";
import { LocationUpdateToOneWithWhereWithoutReviewsInput } from "../inputs/LocationUpdateToOneWithWhereWithoutReviewsInput";
import { LocationUpsertWithoutReviewsInput } from "../inputs/LocationUpsertWithoutReviewsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateOneRequiredWithoutReviewsNestedInput", {})
export class LocationUpdateOneRequiredWithoutReviewsNestedInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpsertWithoutReviewsInput, {
    nullable: true
  })
  upsert?: LocationUpsertWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateToOneWithWhereWithoutReviewsInput, {
    nullable: true
  })
  update?: LocationUpdateToOneWithWhereWithoutReviewsInput | undefined;
}
