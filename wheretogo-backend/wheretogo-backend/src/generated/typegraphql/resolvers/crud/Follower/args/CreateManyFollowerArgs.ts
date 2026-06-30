import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowerCreateManyInput } from "../../../inputs/FollowerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFollowerArgs {
  @TypeGraphQL.Field(_type => [FollowerCreateManyInput], {
    nullable: false
  })
  data!: FollowerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
