import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UploadSessionCreateInput } from "../../../inputs/UploadSessionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUploadSessionArgs {
  @TypeGraphQL.Field(_type => UploadSessionCreateInput, {
    nullable: false
  })
  data!: UploadSessionCreateInput;
}
