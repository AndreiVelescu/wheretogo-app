import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowerCreateInput } from "../../../inputs/FollowerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFollowerArgs {
  @TypeGraphQL.Field(_type => FollowerCreateInput, {
    nullable: false
  })
  data!: FollowerCreateInput;
}
