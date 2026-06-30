import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ChatRoomUpdateManyMutationInput } from "../../../inputs/ChatRoomUpdateManyMutationInput";
import { ChatRoomWhereInput } from "../../../inputs/ChatRoomWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyChatRoomArgs {
  @TypeGraphQL.Field(_type => ChatRoomUpdateManyMutationInput, {
    nullable: false
  })
  data!: ChatRoomUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ChatRoomWhereInput, {
    nullable: true
  })
  where?: ChatRoomWhereInput | undefined;
}
