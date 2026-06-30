import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostShareCreateManyInput } from "../../../inputs/PostShareCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPostShareArgs {
  @TypeGraphQL.Field(_type => [PostShareCreateManyInput], {
    nullable: false
  })
  data!: PostShareCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
