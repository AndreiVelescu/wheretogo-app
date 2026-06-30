import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SavedPostOrderByWithRelationInput } from "../../../inputs/SavedPostOrderByWithRelationInput";
import { SavedPostWhereInput } from "../../../inputs/SavedPostWhereInput";
import { SavedPostWhereUniqueInput } from "../../../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSavedPostArgs {
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
}
