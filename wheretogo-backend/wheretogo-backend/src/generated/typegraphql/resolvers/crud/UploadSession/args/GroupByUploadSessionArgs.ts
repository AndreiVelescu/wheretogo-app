import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UploadSessionOrderByWithAggregationInput } from "../../../inputs/UploadSessionOrderByWithAggregationInput";
import { UploadSessionScalarWhereWithAggregatesInput } from "../../../inputs/UploadSessionScalarWhereWithAggregatesInput";
import { UploadSessionWhereInput } from "../../../inputs/UploadSessionWhereInput";
import { UploadSessionScalarFieldEnum } from "../../../../enums/UploadSessionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUploadSessionArgs {
  @TypeGraphQL.Field(_type => UploadSessionWhereInput, {
    nullable: true
  })
  where?: UploadSessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UploadSessionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "fileKey" | "filename" | "contentType" | "size" | "status" | "confirmedAt" | "expiresAt" | "createdAt">;

  @TypeGraphQL.Field(_type => UploadSessionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UploadSessionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
