import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostLikesInput } from "../inputs/UserCreateOrConnectWithoutPostLikesInput";
import { UserCreateWithoutPostLikesInput } from "../inputs/UserCreateWithoutPostLikesInput";
import { UserUpdateToOneWithWhereWithoutPostLikesInput } from "../inputs/UserUpdateToOneWithWhereWithoutPostLikesInput";
import { UserUpsertWithoutPostLikesInput } from "../inputs/UserUpsertWithoutPostLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPostLikesNestedInput", {})
export class UserUpdateOneRequiredWithoutPostLikesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostLikesInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostLikesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPostLikesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutPostLikesInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutPostLikesInput | undefined;
}
