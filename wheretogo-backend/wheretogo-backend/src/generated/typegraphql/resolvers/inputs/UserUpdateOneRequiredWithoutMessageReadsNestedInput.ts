import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutMessageReadsInput } from "../inputs/UserCreateOrConnectWithoutMessageReadsInput";
import { UserCreateWithoutMessageReadsInput } from "../inputs/UserCreateWithoutMessageReadsInput";
import { UserUpdateToOneWithWhereWithoutMessageReadsInput } from "../inputs/UserUpdateToOneWithWhereWithoutMessageReadsInput";
import { UserUpsertWithoutMessageReadsInput } from "../inputs/UserUpsertWithoutMessageReadsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMessageReadsNestedInput", {})
export class UserUpdateOneRequiredWithoutMessageReadsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutMessageReadsInput, {
    nullable: true
  })
  create?: UserCreateWithoutMessageReadsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutMessageReadsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutMessageReadsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutMessageReadsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutMessageReadsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutMessageReadsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutMessageReadsInput | undefined;
}
