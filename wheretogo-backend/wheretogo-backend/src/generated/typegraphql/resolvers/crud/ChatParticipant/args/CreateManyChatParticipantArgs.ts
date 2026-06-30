import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatParticipantCreateManyInput } from "../../../inputs/ChatParticipantCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyChatParticipantArgs {
  @TypeGraphQL.Field(_type => [ChatParticipantCreateManyInput], {
    nullable: false
  })
  data!: ChatParticipantCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
