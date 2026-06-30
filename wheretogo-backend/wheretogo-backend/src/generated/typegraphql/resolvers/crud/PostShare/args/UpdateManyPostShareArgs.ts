import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostShareUpdateManyMutationInput } from "../../../inputs/PostShareUpdateManyMutationInput";
import { PostShareWhereInput } from "../../../inputs/PostShareWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostShareArgs {
  @TypeGraphQL.Field(_type => PostShareUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostShareUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostShareWhereInput, {
    nullable: true
  })
  where?: PostShareWhereInput | undefined;
}
