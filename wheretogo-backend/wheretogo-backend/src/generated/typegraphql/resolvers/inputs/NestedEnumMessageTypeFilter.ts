import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.InputType("NestedEnumMessageTypeFilter", {})
export class NestedEnumMessageTypeFilter {
  @TypeGraphQL.Field(_type => MessageType, {
    nullable: true
  })
  equals?: "TEXT" | "IMAGE" | "LOCATION" | "FILE" | "SYSTEM" | undefined;

  @TypeGraphQL.Field(_type => [MessageType], {
    nullable: true
  })
  in?: Array<"TEXT" | "IMAGE" | "LOCATION" | "FILE" | "SYSTEM"> | undefined;

  @TypeGraphQL.Field(_type => [MessageType], {
    nullable: true
  })
  notIn?: Array<"TEXT" | "IMAGE" | "LOCATION" | "FILE" | "SYSTEM"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumMessageTypeFilter, {
    nullable: true
  })
  not?: NestedEnumMessageTypeFilter | undefined;
}
