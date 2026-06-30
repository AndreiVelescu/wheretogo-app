import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FollowerOrderByWithAggregationInput } from "../../../inputs/FollowerOrderByWithAggregationInput";
import { FollowerScalarWhereWithAggregatesInput } from "../../../inputs/FollowerScalarWhereWithAggregatesInput";
import { FollowerWhereInput } from "../../../inputs/FollowerWhereInput";
import { FollowerScalarFieldEnum } from "../../../../enums/FollowerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFollowerArgs {
  @TypeGraphQL.Field(_type => FollowerWhereInput, {
    nullable: true
  })
  where?: FollowerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FollowerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FollowerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FollowerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "followerId" | "createdAt">;

  @TypeGraphQL.Field(_type => FollowerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FollowerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
