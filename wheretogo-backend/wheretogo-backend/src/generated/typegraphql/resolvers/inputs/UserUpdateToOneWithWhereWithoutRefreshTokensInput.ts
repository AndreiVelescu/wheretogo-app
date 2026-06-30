import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutRefreshTokensInput } from "../inputs/UserUpdateWithoutRefreshTokensInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutRefreshTokensInput", {})
export class UserUpdateToOneWithWhereWithoutRefreshTokensInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutRefreshTokensInput, {
    nullable: false
  })
  data!: UserUpdateWithoutRefreshTokensInput;
}
