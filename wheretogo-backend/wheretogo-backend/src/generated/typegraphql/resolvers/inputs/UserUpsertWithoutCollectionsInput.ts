import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCollectionsInput } from "../inputs/UserCreateWithoutCollectionsInput";
import { UserUpdateWithoutCollectionsInput } from "../inputs/UserUpdateWithoutCollectionsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutCollectionsInput", {})
export class UserUpsertWithoutCollectionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCollectionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCollectionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCollectionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutCollectionsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
