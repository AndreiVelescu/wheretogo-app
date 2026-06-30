import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UploadSessionCreateInput } from "../../../inputs/UploadSessionCreateInput";
import { UploadSessionUpdateInput } from "../../../inputs/UploadSessionUpdateInput";
import { UploadSessionWhereUniqueInput } from "../../../inputs/UploadSessionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUploadSessionArgs {
  @TypeGraphQL.Field(_type => UploadSessionWhereUniqueInput, {
    nullable: false
  })
  where!: UploadSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => UploadSessionCreateInput, {
    nullable: false
  })
  create!: UploadSessionCreateInput;

  @TypeGraphQL.Field(_type => UploadSessionUpdateInput, {
    nullable: false
  })
  update!: UploadSessionUpdateInput;
}
