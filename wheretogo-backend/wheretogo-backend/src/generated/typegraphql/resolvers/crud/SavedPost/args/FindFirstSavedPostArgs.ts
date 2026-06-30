import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavedPostOrderByWithRelationInput } from "../../../inputs/SavedPostOrderByWithRelationInput";
import { SavedPostWhereInput } from "../../../inputs/SavedPostWhereInput";
import { SavedPostWhereUniqueInput } from "../../../inputs/SavedPostWhereUniqueInput";
import { SavedPostScalarFieldEnum } from "../../../../enums/SavedPostScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSavedPostArgs {
  @TypeGraphQL.Field(_type => SavedPostWhereInput, {
    nullable: true
  })
  where?: SavedPostWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SavedPostOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SavedPostOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SavedPostWhereUniqueInput, {
    nullable: true
  })
  cursor?: SavedPostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SavedPostScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "postId" | "note" | "createdAt"> | undefined;
}
