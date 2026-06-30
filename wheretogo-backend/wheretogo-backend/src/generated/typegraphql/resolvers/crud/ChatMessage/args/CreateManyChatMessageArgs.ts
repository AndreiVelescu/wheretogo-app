import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatMessageCreateManyInput } from "../../../inputs/ChatMessageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyChatMessageArgs {
  @TypeGraphQL.Field(_type => [ChatMessageCreateManyInput], {
    nullable: false
  })
  data!: ChatMessageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
