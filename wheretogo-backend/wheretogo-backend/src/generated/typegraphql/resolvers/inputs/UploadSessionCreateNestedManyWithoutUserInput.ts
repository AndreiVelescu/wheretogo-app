import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadSessionCreateManyUserInputEnvelope } from "../inputs/UploadSessionCreateManyUserInputEnvelope";
import { UploadSessionCreateOrConnectWithoutUserInput } from "../inputs/UploadSessionCreateOrConnectWithoutUserInput";
import { UploadSessionCreateWithoutUserInput } from "../inputs/UploadSessionCreateWithoutUserInput";
import { UploadSessionWhereUniqueInput } from "../inputs/UploadSessionWhereUniqueInput";

@TypeGraphQL.InputType("UploadSessionCreateNestedManyWithoutUserInput", {})
export class UploadSessionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UploadSessionCreateWithoutUserInput], {
    nullable: true
  })
  create?: UploadSessionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UploadSessionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UploadSessionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UploadSessionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionWhereUniqueInput], {
    nullable: true
  })
  connect?: UploadSessionWhereUniqueInput[] | undefined;
}
