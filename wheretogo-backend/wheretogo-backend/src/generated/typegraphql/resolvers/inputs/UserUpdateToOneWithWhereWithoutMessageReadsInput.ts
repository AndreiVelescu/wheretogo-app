import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutMessageReadsInput } from "../inputs/UserUpdateWithoutMessageReadsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutMessageReadsInput", {})
export class UserUpdateToOneWithWhereWithoutMessageReadsInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutMessageReadsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutMessageReadsInput;
}
