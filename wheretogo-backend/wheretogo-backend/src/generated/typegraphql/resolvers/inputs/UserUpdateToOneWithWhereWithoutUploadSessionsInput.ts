import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutUploadSessionsInput } from "../inputs/UserUpdateWithoutUploadSessionsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutUploadSessionsInput", {})
export class UserUpdateToOneWithWhereWithoutUploadSessionsInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutUploadSessionsInput, {
    nullable: false
  })
  data!: UserUpdateWithoutUploadSessionsInput;
}
