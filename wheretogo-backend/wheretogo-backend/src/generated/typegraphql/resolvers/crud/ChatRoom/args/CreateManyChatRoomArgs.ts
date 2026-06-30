import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatRoomCreateManyInput } from "../../../inputs/ChatRoomCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyChatRoomArgs {
  @TypeGraphQL.Field(_type => [ChatRoomCreateManyInput], {
    nullable: false
  })
  data!: ChatRoomCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
