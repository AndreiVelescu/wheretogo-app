import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutEventsInput } from "../inputs/LocationCreateOrConnectWithoutEventsInput";
import { LocationCreateWithoutEventsInput } from "../inputs/LocationCreateWithoutEventsInput";
import { LocationUpdateToOneWithWhereWithoutEventsInput } from "../inputs/LocationUpdateToOneWithWhereWithoutEventsInput";
import { LocationUpsertWithoutEventsInput } from "../inputs/LocationUpsertWithoutEventsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateOneRequiredWithoutEventsNestedInput", {})
export class LocationUpdateOneRequiredWithoutEventsNestedInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutEventsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutEventsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpsertWithoutEventsInput, {
    nullable: true
  })
  upsert?: LocationUpsertWithoutEventsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateToOneWithWhereWithoutEventsInput, {
    nullable: true
  })
  update?: LocationUpdateToOneWithWhereWithoutEventsInput | undefined;
}
