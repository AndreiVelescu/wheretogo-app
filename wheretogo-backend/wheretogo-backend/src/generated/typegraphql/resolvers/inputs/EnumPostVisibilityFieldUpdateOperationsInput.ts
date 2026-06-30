import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostVisibility } from "../../enums/PostVisibility";

@TypeGraphQL.InputType("EnumPostVisibilityFieldUpdateOperationsInput", {})
export class EnumPostVisibilityFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => PostVisibility, {
    nullable: true
  })
  set?: "PUBLIC" | "FRIENDS" | "PRIVATE" | undefined;
}
