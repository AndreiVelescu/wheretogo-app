import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutMessageReadsInput } from "../inputs/UserCreateWithoutMessageReadsInput";
import { UserUpdateWithoutMessageReadsInput } from "../inputs/UserUpdateWithoutMessageReadsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutMessageReadsInput", {})
export class UserUpsertWithoutMessageReadsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutMessageReadsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutMessageReadsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutMessageReadsInput, {
    nullable: false
  })
  create!: UserCreateWithoutMessageReadsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
