import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType("EnumUserRoleFieldUpdateOperationsInput", {})
export class EnumUserRoleFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  set?: "USER" | "BUSINESS" | "ADMIN" | undefined;
}
