import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutPostCommentsInput } from "../inputs/UserUpdateWithoutPostCommentsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutPostCommentsInput", {})
export class UserUpdateToOneWithWhereWithoutPostCommentsInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPostCommentsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutPostCommentsInput;
}
