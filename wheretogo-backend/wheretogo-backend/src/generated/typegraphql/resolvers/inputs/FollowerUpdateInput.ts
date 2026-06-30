import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutFollowersNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFollowersNestedInput";
import { UserUpdateOneRequiredWithoutFollowingNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFollowingNestedInput";

@TypeGraphQL.InputType("FollowerUpdateInput", {})
export class FollowerUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowersNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutFollowersNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowingNestedInput, {
    nullable: true
  })
  follower?: UserUpdateOneRequiredWithoutFollowingNestedInput | undefined;
}
