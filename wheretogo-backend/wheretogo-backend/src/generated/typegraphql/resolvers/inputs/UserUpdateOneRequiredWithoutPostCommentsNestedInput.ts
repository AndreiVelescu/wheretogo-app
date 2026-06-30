import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostCommentsInput } from "../inputs/UserCreateOrConnectWithoutPostCommentsInput";
import { UserCreateWithoutPostCommentsInput } from "../inputs/UserCreateWithoutPostCommentsInput";
import { UserUpdateToOneWithWhereWithoutPostCommentsInput } from "../inputs/UserUpdateToOneWithWhereWithoutPostCommentsInput";
import { UserUpsertWithoutPostCommentsInput } from "../inputs/UserUpsertWithoutPostCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPostCommentsNestedInput", {})
export class UserUpdateOneRequiredWithoutPostCommentsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostCommentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPostCommentsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutPostCommentsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutPostCommentsInput | undefined;
}
