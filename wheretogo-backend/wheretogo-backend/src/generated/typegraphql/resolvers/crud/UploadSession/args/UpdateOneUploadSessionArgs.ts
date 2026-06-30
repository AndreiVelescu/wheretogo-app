import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UploadSessionUpdateInput } from "../../../inputs/UploadSessionUpdateInput";
import { UploadSessionWhereUniqueInput } from "../../../inputs/UploadSessionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUploadSessionArgs {
  @TypeGraphQL.Field(_type => UploadSessionUpdateInput, {
    nullable: false
  })
  data!: UploadSessionUpdateInput;

  @TypeGraphQL.Field(_type => UploadSessionWhereUniqueInput, {
    nullable: false
  })
  where!: UploadSessionWhereUniqueInput;
}
