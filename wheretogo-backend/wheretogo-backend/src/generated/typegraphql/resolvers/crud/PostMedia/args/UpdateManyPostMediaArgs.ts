import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMediaUpdateManyMutationInput } from "../../../inputs/PostMediaUpdateManyMutationInput";
import { PostMediaWhereInput } from "../../../inputs/PostMediaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostMediaArgs {
  @TypeGraphQL.Field(_type => PostMediaUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostMediaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PostMediaWhereInput, {
    nullable: true
  })
  where?: PostMediaWhereInput | undefined;
}
