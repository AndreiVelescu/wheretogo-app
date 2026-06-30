import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UploadSessionWhereUniqueInput } from "../../../inputs/UploadSessionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUploadSessionArgs {
  @TypeGraphQL.Field(_type => UploadSessionWhereUniqueInput, {
    nullable: false
  })
  where!: UploadSessionWhereUniqueInput;
}
