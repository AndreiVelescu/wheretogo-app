import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutFollowersNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFollowersNestedInput";

@TypeGraphQL.InputType("FollowerUpdateWithoutFollowerInput", {})
export class FollowerUpdateWithoutFollowerInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowersNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutFollowersNestedInput | undefined;
}
