import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadSessionCreateWithoutUserInput } from "../inputs/UploadSessionCreateWithoutUserInput";
import { UploadSessionWhereUniqueInput } from "../inputs/UploadSessionWhereUniqueInput";

@TypeGraphQL.InputType("UploadSessionCreateOrConnectWithoutUserInput", {})
export class UploadSessionCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UploadSessionWhereUniqueInput, {
    nullable: false
  })
  where!: UploadSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => UploadSessionCreateWithoutUserInput, {
    nullable: false
  })
  create!: UploadSessionCreateWithoutUserInput;
}
