import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateOrConnectWithoutReadByInput } from "../inputs/ChatMessageCreateOrConnectWithoutReadByInput";
import { ChatMessageCreateWithoutReadByInput } from "../inputs/ChatMessageCreateWithoutReadByInput";
import { ChatMessageUpdateToOneWithWhereWithoutReadByInput } from "../inputs/ChatMessageUpdateToOneWithWhereWithoutReadByInput";
import { ChatMessageUpsertWithoutReadByInput } from "../inputs/ChatMessageUpsertWithoutReadByInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageUpdateOneRequiredWithoutReadByNestedInput", {})
export class ChatMessageUpdateOneRequiredWithoutReadByNestedInput {
  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutReadByInput, {
    nullable: true
  })
  create?: ChatMessageCreateWithoutReadByInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCreateOrConnectWithoutReadByInput, {
    nullable: true
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutReadByInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageUpsertWithoutReadByInput, {
    nullable: true
  })
  upsert?: ChatMessageUpsertWithoutReadByInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatMessageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageUpdateToOneWithWhereWithoutReadByInput, {
    nullable: true
  })
  update?: ChatMessageUpdateToOneWithWhereWithoutReadByInput | undefined;
}
