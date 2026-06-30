import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutDaysInput } from "../inputs/TripCreateOrConnectWithoutDaysInput";
import { TripCreateWithoutDaysInput } from "../inputs/TripCreateWithoutDaysInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedOneWithoutDaysInput", {})
export class TripCreateNestedOneWithoutDaysInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutDaysInput, {
    nullable: true
  })
  create?: TripCreateWithoutDaysInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutDaysInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutDaysInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;
}
