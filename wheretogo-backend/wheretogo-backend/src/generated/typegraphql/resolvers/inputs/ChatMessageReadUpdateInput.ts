import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageUpdateOneRequiredWithoutReadByNestedInput } from "../inputs/ChatMessageUpdateOneRequiredWithoutReadByNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMessageReadsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutMessageReadsNestedInput";

@TypeGraphQL.InputType("ChatMessageReadUpdateInput", {})
export class ChatMessageReadUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  readAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMessageReadsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutMessageReadsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageUpdateOneRequiredWithoutReadByNestedInput, {
    nullable: true
  })
  message?: ChatMessageUpdateOneRequiredWithoutReadByNestedInput | undefined;
}
