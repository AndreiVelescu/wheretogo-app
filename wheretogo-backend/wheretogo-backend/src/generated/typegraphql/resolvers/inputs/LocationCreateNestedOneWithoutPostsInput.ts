import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutPostsInput } from "../inputs/LocationCreateOrConnectWithoutPostsInput";
import { LocationCreateWithoutPostsInput } from "../inputs/LocationCreateWithoutPostsInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationCreateNestedOneWithoutPostsInput", {})
export class LocationCreateNestedOneWithoutPostsInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutPostsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;
}
