import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UploadSessionCreateManyInput } from "../../../inputs/UploadSessionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUploadSessionArgs {
  @TypeGraphQL.Field(_type => [UploadSessionCreateManyInput], {
    nullable: false
  })
  data!: UploadSessionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
