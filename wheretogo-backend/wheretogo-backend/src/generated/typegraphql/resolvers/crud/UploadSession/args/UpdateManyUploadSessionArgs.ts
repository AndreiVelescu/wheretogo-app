import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UploadSessionUpdateManyMutationInput } from "../../../inputs/UploadSessionUpdateManyMutationInput";
import { UploadSessionWhereInput } from "../../../inputs/UploadSessionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUploadSessionArgs {
  @TypeGraphQL.Field(_type => UploadSessionUpdateManyMutationInput, {
    nullable: false
  })
  data!: UploadSessionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UploadSessionWhereInput, {
    nullable: true
  })
  where?: UploadSessionWhereInput | undefined;
}
