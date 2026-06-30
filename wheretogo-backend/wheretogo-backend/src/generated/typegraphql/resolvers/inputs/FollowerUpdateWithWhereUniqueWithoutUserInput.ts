import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerUpdateWithoutUserInput } from "../inputs/FollowerUpdateWithoutUserInput";
import { FollowerWhereUniqueInput } from "../inputs/FollowerWhereUniqueInput";

@TypeGraphQL.InputType("FollowerUpdateWithWhereUniqueWithoutUserInput", {})
export class FollowerUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => FollowerWhereUniqueInput, {
    nullable: false
  })
  where!: FollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => FollowerUpdateWithoutUserInput, {
    nullable: false
  })
  data!: FollowerUpdateWithoutUserInput;
}
