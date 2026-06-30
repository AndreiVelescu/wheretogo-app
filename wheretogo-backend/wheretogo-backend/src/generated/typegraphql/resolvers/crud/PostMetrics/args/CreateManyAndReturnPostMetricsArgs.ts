import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostMetricsCreateManyInput } from "../../../inputs/PostMetricsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnPostMetricsArgs {
  @TypeGraphQL.Field(_type => [PostMetricsCreateManyInput], {
    nullable: false
  })
  data!: PostMetricsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
