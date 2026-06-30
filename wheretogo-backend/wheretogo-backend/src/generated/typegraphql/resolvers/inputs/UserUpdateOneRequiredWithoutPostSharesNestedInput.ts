import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostSharesInput } from "../inputs/UserCreateOrConnectWithoutPostSharesInput";
import { UserCreateWithoutPostSharesInput } from "../inputs/UserCreateWithoutPostSharesInput";
import { UserUpdateToOneWithWhereWithoutPostSharesInput } from "../inputs/UserUpdateToOneWithWhereWithoutPostSharesInput";
import { UserUpsertWithoutPostSharesInput } from "../inputs/UserUpsertWithoutPostSharesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPostSharesNestedInput", {})
export class UserUpdateOneRequiredWithoutPostSharesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostSharesInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostSharesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostSharesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostSharesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPostSharesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostSharesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutPostSharesInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutPostSharesInput | undefined;
}
