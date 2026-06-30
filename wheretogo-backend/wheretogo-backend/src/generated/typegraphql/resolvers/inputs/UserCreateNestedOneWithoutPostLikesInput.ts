import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostLikesInput } from "../inputs/UserCreateOrConnectWithoutPostLikesInput";
import { UserCreateWithoutPostLikesInput } from "../inputs/UserCreateWithoutPostLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPostLikesInput", {})
export class UserCreateNestedOneWithoutPostLikesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostLikesInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostLikesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
