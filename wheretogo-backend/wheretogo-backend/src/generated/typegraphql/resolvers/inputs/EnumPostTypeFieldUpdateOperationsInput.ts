import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostType } from "../../enums/PostType";

@TypeGraphQL.InputType("EnumPostTypeFieldUpdateOperationsInput", {})
export class EnumPostTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => PostType, {
    nullable: true
  })
  set?: "EXPERIENCE" | "TIP" | "TRIP" | undefined;
}
