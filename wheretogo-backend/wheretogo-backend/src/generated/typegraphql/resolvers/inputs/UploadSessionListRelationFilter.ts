import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadSessionWhereInput } from "../inputs/UploadSessionWhereInput";

@TypeGraphQL.InputType("UploadSessionListRelationFilter", {})
export class UploadSessionListRelationFilter {
  @TypeGraphQL.Field(_type => UploadSessionWhereInput, {
    nullable: true
  })
  every?: UploadSessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => UploadSessionWhereInput, {
    nullable: true
  })
  some?: UploadSessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => UploadSessionWhereInput, {
    nullable: true
  })
  none?: UploadSessionWhereInput | undefined;
}
