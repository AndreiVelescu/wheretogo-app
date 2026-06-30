import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadSessionCreateWithoutUserInput } from "../inputs/UploadSessionCreateWithoutUserInput";
import { UploadSessionUpdateWithoutUserInput } from "../inputs/UploadSessionUpdateWithoutUserInput";
import { UploadSessionWhereUniqueInput } from "../inputs/UploadSessionWhereUniqueInput";

@TypeGraphQL.InputType("UploadSessionUpsertWithWhereUniqueWithoutUserInput", {})
export class UploadSessionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UploadSessionWhereUniqueInput, {
    nullable: false
  })
  where!: UploadSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => UploadSessionUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UploadSessionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UploadSessionCreateWithoutUserInput, {
    nullable: false
  })
  create!: UploadSessionCreateWithoutUserInput;
}
