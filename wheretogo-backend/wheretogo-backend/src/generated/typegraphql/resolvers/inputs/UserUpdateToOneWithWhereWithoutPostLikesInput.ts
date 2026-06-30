import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutPostLikesInput } from "../inputs/UserUpdateWithoutPostLikesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutPostLikesInput", {})
export class UserUpdateToOneWithWhereWithoutPostLikesInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPostLikesInput, {
    nullable: false
  })
  data!: UserUpdateWithoutPostLikesInput;
}
