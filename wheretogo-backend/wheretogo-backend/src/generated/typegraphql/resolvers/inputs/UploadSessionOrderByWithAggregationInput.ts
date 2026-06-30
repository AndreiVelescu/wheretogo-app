import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UploadSessionAvgOrderByAggregateInput } from "../inputs/UploadSessionAvgOrderByAggregateInput";
import { UploadSessionCountOrderByAggregateInput } from "../inputs/UploadSessionCountOrderByAggregateInput";
import { UploadSessionMaxOrderByAggregateInput } from "../inputs/UploadSessionMaxOrderByAggregateInput";
import { UploadSessionMinOrderByAggregateInput } from "../inputs/UploadSessionMinOrderByAggregateInput";
import { UploadSessionSumOrderByAggregateInput } from "../inputs/UploadSessionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UploadSessionOrderByWithAggregationInput", {})
export class UploadSessionOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fileKey?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  filename?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contentType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  size?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  confirmedAt?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expiresAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UploadSessionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UploadSessionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UploadSessionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UploadSessionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UploadSessionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UploadSessionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UploadSessionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UploadSessionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UploadSessionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UploadSessionSumOrderByAggregateInput | undefined;
}
