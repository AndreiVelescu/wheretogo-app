import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostShareOrderByWithAggregationInput } from "../../../inputs/PostShareOrderByWithAggregationInput";
import { PostShareScalarWhereWithAggregatesInput } from "../../../inputs/PostShareScalarWhereWithAggregatesInput";
import { PostShareWhereInput } from "../../../inputs/PostShareWhereInput";
import { PostShareScalarFieldEnum } from "../../../../enums/PostShareScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPostShareArgs {
  @TypeGraphQL.Field(_type => PostShareWhereInput, {
    nullable: true
  })
  where?: PostShareWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PostShareOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PostShareOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostShareScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "postId" | "platform" | "createdAt">;

  @TypeGraphQL.Field(_type => PostShareScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PostShareScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
