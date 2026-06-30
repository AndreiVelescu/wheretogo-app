import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutUploadSessionsInput } from "../inputs/UserCreateOrConnectWithoutUploadSessionsInput";
import { UserCreateWithoutUploadSessionsInput } from "../inputs/UserCreateWithoutUploadSessionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutUploadSessionsInput", {})
export class UserCreateNestedOneWithoutUploadSessionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutUploadSessionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutUploadSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutUploadSessionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutUploadSessionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
