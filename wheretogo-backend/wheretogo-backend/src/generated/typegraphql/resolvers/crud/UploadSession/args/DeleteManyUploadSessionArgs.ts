import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UploadSessionWhereInput } from "../../../inputs/UploadSessionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUploadSessionArgs {
  @TypeGraphQL.Field(_type => UploadSessionWhereInput, {
    nullable: true
  })
  where?: UploadSessionWhereInput | undefined;
}
