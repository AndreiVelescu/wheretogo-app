import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCommentLikesInput } from "../inputs/UserCreateOrConnectWithoutCommentLikesInput";
import { UserCreateWithoutCommentLikesInput } from "../inputs/UserCreateWithoutCommentLikesInput";
import { UserUpdateToOneWithWhereWithoutCommentLikesInput } from "../inputs/UserUpdateToOneWithWhereWithoutCommentLikesInput";
import { UserUpsertWithoutCommentLikesInput } from "../inputs/UserUpsertWithoutCommentLikesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCommentLikesNestedInput", {})
export class UserUpdateOneRequiredWithoutCommentLikesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCommentLikesInput, {
    nullable: true
  })
  create?: UserCreateWithoutCommentLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCommentLikesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCommentLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCommentLikesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCommentLikesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutCommentLikesInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutCommentLikesInput | undefined;
}
