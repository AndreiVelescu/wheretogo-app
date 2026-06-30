import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TripCreateOrConnectWithoutPostsInput } from "../inputs/TripCreateOrConnectWithoutPostsInput";
import { TripCreateWithoutPostsInput } from "../inputs/TripCreateWithoutPostsInput";
import { TripUpdateToOneWithWhereWithoutPostsInput } from "../inputs/TripUpdateToOneWithWhereWithoutPostsInput";
import { TripUpsertWithoutPostsInput } from "../inputs/TripUpsertWithoutPostsInput";
import { TripWhereInput } from "../inputs/TripWhereInput";
import { TripWhereUniqueInput } from "../inputs/TripWhereUniqueInput";

@TypeGraphQL.InputType("TripUpdateOneWithoutPostsNestedInput", {})
export class TripUpdateOneWithoutPostsNestedInput {
  @TypeGraphQL.Field(_type => TripCreateWithoutPostsInput, {
    nullable: true
  })
  create?: TripCreateWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => TripCreateOrConnectWithoutPostsInput, {
    nullable: true
  })
  connectOrCreate?: TripCreateOrConnectWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => TripUpsertWithoutPostsInput, {
    nullable: true
  })
  upsert?: TripUpsertWithoutPostsInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  disconnect?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereInput, {
    nullable: true
  })
  delete?: TripWhereInput | undefined;

  @TypeGraphQL.Field(_type => TripWhereUniqueInput, {
    nullable: true
  })
  connect?: TripWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TripUpdateToOneWithWhereWithoutPostsInput, {
    nullable: true
  })
  update?: TripUpdateToOneWithWhereWithoutPostsInput | undefined;
}
