import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateOrConnectWithoutRepliesInput } from "../inputs/ChatMessageCreateOrConnectWithoutRepliesInput";
import { ChatMessageCreateWithoutRepliesInput } from "../inputs/ChatMessageCreateWithoutRepliesInput";
import { ChatMessageUpdateToOneWithWhereWithoutRepliesInput } from "../inputs/ChatMessageUpdateToOneWithWhereWithoutRepliesInput";
import { ChatMessageUpsertWithoutRepliesInput } from "../inputs/ChatMessageUpsertWithoutRepliesInput";
import { ChatMessageWhereInput } from "../inputs/ChatMessageWhereInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageUpdateOneWithoutRepliesNestedInput", {})
export class ChatMessageUpdateOneWithoutRepliesNestedInput {
  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutRepliesInput, {
    nullable: true
  })
  create?: ChatMessageCreateWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCreateOrConnectWithoutRepliesInput, {
    nullable: true
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageUpsertWithoutRepliesInput, {
    nullable: true
  })
  upsert?: ChatMessageUpsertWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  disconnect?: ChatMessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageWhereInput, {
    nullable: true
  })
  delete?: ChatMessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatMessageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageUpdateToOneWithWhereWithoutRepliesInput, {
    nullable: true
  })
  update?: ChatMessageUpdateToOneWithWhereWithoutRepliesInput | undefined;
}
