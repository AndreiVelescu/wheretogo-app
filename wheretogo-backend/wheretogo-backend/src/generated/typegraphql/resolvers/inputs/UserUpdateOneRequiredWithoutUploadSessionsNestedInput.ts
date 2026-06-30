import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUploadSessionsInput } from "../inputs/UserCreateOrConnectWithoutUploadSessionsInput";
import { UserCreateWithoutUploadSessionsInput } from "../inputs/UserCreateWithoutUploadSessionsInput";
import { UserUpdateToOneWithWhereWithoutUploadSessionsInput } from "../inputs/UserUpdateToOneWithWhereWithoutUploadSessionsInput";
import { UserUpsertWithoutUploadSessionsInput } from "../inputs/UserUpsertWithoutUploadSessionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutUploadSessionsNestedInput", {})
export class UserUpdateOneRequiredWithoutUploadSessionsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUploadSessionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutUploadSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUploadSessionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUploadSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutUploadSessionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutUploadSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutUploadSessionsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutUploadSessionsInput | undefined;
}
