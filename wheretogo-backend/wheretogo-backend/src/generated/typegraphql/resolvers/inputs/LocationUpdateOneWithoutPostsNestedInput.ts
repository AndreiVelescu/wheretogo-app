import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreateOrConnectWithoutPostsInput } from "../inputs/LocationCreateOrConnectWithoutPostsInput";
import { LocationCreateWithoutPostsInput } from "../inputs/LocationCreateWithoutPostsInput";
import { LocationUpdateToOneWithWhereWithoutPostsInput } from "../inputs/LocationUpdateToOneWithWhereWithoutPostsInput";
import { LocationUpsertWithoutPostsInput } from "../inputs/LocationUpsertWithoutPostsInput";
import { LocationWhereInput } from "../inputs/LocationWhereInput";
import { LocationWhereUniqueInput } from "../inputs/LocationWhereUniqueInput";

@TypeGraphQL.InputType("LocationUpdateOneWithoutPostsNestedInput", {})
export class LocationUpdateOneWithoutPostsNestedInput {
  @TypeGraphQL.Field(_type => LocationCreateWithoutPostsInput, {
    nullable: true
  })
  create?: LocationCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => LocationCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: LocationCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: LocationUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  disconnect?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereInput, {
    nullable: true
  })
  delete?: LocationWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocationWhereUniqueInput, {
    nullable: true
  })
  connect?: LocationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocationUpdateToOneWithWhereWithoutPostsInput, {
    nullable: true
  })
  update?: LocationUpdateToOneWithWhereWithoutPostsInput | undefined;
}
