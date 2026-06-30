import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutPostsInput } from "../inputs/TripCreateOrConnectWithoutPostsInput";
import { TripCreateWithoutPostsInput } from "../inputs/TripCreateWithoutPostsInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripCreateNestedOneWithoutPostsInput", {})
export class TripCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutPostsInput, {
    nullable: true
  })
  create?: TripCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;
}
