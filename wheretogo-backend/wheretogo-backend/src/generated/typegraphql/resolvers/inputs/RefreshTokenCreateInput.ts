import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutRefreshTokensInput } from "../inputs/UserCreateNestedOneWithoutRefreshTokensInput";

@TypeGraphQL.InputType("RefreshTokenCreateInput", {})
export class RefreshTokenCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expiresAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutRefreshTokensInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutRefreshTokensInput;
}
