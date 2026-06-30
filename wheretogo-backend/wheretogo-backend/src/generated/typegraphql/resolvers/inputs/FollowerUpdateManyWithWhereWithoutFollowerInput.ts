import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FollowerScalarWhereInput } from "../inputs/FollowerScalarWhereInput";
import { FollowerUpdateManyMutationInput } from "../inputs/FollowerUpdateManyMutationInput";

@TypeGraphQL.InputType("FollowerUpdateManyWithWhereWithoutFollowerInput", {})
export class FollowerUpdateManyWithWhereWithoutFollowerInput {
  @TypeGraphQL.Field(_type => FollowerScalarWhereInput, {
    nullable: false
  })
  where!: FollowerScalarWhereInput;

  @TypeGraphQL.Field(_type => FollowerUpdateManyMutationInput, {
    nullable: false
  })
  data!: FollowerUpdateManyMutationInput;
}
