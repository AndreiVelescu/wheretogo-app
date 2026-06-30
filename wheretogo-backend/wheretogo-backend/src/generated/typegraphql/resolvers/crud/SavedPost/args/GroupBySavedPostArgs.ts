import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavedPostOrderByWithAggregationInput } from "../../../inputs/SavedPostOrderByWithAggregationInput";
import { SavedPostScalarWhereWithAggregatesInput } from "../../../inputs/SavedPostScalarWhereWithAggregatesInput";
import { SavedPostWhereInput } from "../../../inputs/SavedPostWhereInput";
import { SavedPostScalarFieldEnum } from "../../../../enums/SavedPostScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySavedPostArgs {
  @TypeGraphQL.Field(_type => SavedPostWhereInput, {
    nullable: true
  })
  where?: SavedPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SavedPostOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SavedPostOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "postId" | "note" | "createdAt">;

  @TypeGraphQL.Field(_type => SavedPostScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SavedPostScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
