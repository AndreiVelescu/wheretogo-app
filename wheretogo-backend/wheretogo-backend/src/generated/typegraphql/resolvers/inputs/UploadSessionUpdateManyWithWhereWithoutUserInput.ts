import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadSessionScalarWhereInput } from "../inputs/UploadSessionScalarWhereInput";
import { UploadSessionUpdateManyMutationInput } from "../inputs/UploadSessionUpdateManyMutationInput";

@TypeGraphQL.InputType("UploadSessionUpdateManyWithWhereWithoutUserInput", {})
export class UploadSessionUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UploadSessionScalarWhereInput, {
    nullable: false
  })
  where!: UploadSessionScalarWhereInput;

  @TypeGraphQL.Field(_type => UploadSessionUpdateManyMutationInput, {
    nullable: false
  })
  data!: UploadSessionUpdateManyMutationInput;
}
