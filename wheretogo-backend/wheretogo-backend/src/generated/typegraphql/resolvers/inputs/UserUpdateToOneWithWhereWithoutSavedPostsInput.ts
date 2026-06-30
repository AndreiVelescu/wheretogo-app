import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutSavedPostsInput } from "../inputs/UserUpdateWithoutSavedPostsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutSavedPostsInput", {})
export class UserUpdateToOneWithWhereWithoutSavedPostsInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSavedPostsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutSavedPostsInput;
}
