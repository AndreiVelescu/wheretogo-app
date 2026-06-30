import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowerUpdateManyMutationInput } from "../../../inputs/FollowerUpdateManyMutationInput";
import { FollowerWhereInput } from "../../../inputs/FollowerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFollowerArgs {
  @TypeGraphQL.Field(_type => FollowerUpdateManyMutationInput, {
    nullable: false
  })
  data!: FollowerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FollowerWhereInput, {
    nullable: true
  })
  where?: FollowerWhereInput | undefined;
}
