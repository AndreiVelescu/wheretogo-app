import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutFollowingInput } from "../inputs/UserUpdateWithoutFollowingInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutFollowingInput", {})
export class UserUpdateToOneWithWhereWithoutFollowingInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowingInput, {
    nullable: false
  })
  data!: UserUpdateWithoutFollowingInput;
}
