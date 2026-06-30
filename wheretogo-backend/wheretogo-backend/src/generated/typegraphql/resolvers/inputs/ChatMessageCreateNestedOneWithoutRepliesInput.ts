import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ChatMessageCreateOrConnectWithoutRepliesInput } from "../inputs/ChatMessageCreateOrConnectWithoutRepliesInput";
import { ChatMessageCreateWithoutRepliesInput } from "../inputs/ChatMessageCreateWithoutRepliesInput";
import { ChatMessageWhereUniqueInput } from "../inputs/ChatMessageWhereUniqueInput";

@TypeGraphQL.InputType("ChatMessageCreateNestedOneWithoutRepliesInput", {})
export class ChatMessageCreateNestedOneWithoutRepliesInput {
  @TypeGraphQL.Field(_type => ChatMessageCreateWithoutRepliesInput, {
    nullable: true
  })
  create?: ChatMessageCreateWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageCreateOrConnectWithoutRepliesInput, {
    nullable: true
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutRepliesInput | undefined;

  @TypeGraphQL.Field(_type => ChatMessageWhereUniqueInput, {
    nullable: true
  })
  connect?: ChatMessageWhereUniqueInput | undefined;
}
