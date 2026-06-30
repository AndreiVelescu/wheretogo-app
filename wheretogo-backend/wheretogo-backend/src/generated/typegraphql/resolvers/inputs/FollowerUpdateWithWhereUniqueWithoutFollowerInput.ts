import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerUpdateWithoutFollowerInput } from "../inputs/FollowerUpdateWithoutFollowerInput";
import { FollowerWhereUniqueInput } from "../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.InputType("FollowerUpdateWithWhereUniqueWithoutFollowerInput", {})
export class FollowerUpdateWithWhereUniqueWithoutFollowerInput {
  @TypeGraphQL.Field(_type => FollowerWhereUniqueInput, {
    nullable: false
  })
  where!: FollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowerUpdateWithoutFollowerInput, {
    nullable: false
  })
  data!: FollowerUpdateWithoutFollowerInput;
}
