import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageReadCreateManyInput } from "../../../inputs/ChatMessageReadCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnChatMessageReadArgs {
  @TypeGraphQL.Field(_type => [ChatMessageReadCreateManyInput], {
    nullable: false
  })
  data!: ChatMessageReadCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
