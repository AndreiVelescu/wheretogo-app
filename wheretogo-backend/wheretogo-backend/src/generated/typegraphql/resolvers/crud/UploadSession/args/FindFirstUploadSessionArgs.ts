import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UploadSessionOrderByWithRelationInput } from "../../../inputs/UploadSessionOrderByWithRelationInput";
import { UploadSessionWhereInput } from "../../../inputs/UploadSessionWhereInput";
import { UploadSessionWhereUniqueInput } from "../../../inputs/UploadSessionWhereUniqueInput";
import { UploadSessionScalarFieldEnum } from "../../../../enums/UploadSessionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUploadSessionArgs {
  @TypeGraphQL.Field(_type => UploadSessionWhereInput, {
    nullable: true
  })
  where?: UploadSessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UploadSessionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UploadSessionWhereUniqueInput, {
    nullable: true
  })
  cursor?: UploadSessionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "fileKey" | "filename" | "contentType" | "size" | "status" | "confirmedAt" | "expiresAt" | "createdAt"> | undefined;
}
