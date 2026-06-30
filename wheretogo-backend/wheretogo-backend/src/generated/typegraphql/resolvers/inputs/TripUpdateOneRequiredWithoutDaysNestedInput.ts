import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutDaysInput } from "../inputs/TripCreateOrConnectWithoutDaysInput";
import { TripCreateWithoutDaysInput } from "../inputs/TripCreateWithoutDaysInput";
import { TripUpdateToOneWithWhereWithoutDaysInput } from "../inputs/TripUpdateToOneWithWhereWithoutDaysInput";
import { TripUpsertWithoutDaysInput } from "../inputs/TripUpsertWithoutDaysInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateOneRequiredWithoutDaysNestedInput", {})
export class TripUpdateOneRequiredWithoutDaysNestedInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutDaysInput, {
    nullable: true
  })
  create?: TripCreateWithoutDaysInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutDaysInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutDaysInput | undefined;

  @TypeGraphQL.Field(_type => TripUpsertWithoutDaysInput, {
    nullable: true
  })
  upsert?: TripUpsertWithoutDaysInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateToOneWithWhereWithoutDaysInput, {
    nullable: true
  })
  update?: TripUpdateToOneWithWhereWithoutDaysInput | undefined;
}
