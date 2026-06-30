import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadSessionUpdateWithoutUserInput } from "../inputs/UploadSessionUpdateWithoutUserInput";
import { UploadSessionWhereUniqueInput } from "../inputs/UploadSessionWhereUniqueInput";

@TypeGraphQL.InputType("UploadSessionUpdateWithWhereUniqueWithoutUserInput", {})
export class UploadSessionUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UploadSessionWhereUniqueInput, {
    nullable: false
  })
  where!: UploadSessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => UploadSessionUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UploadSessionUpdateWithoutUserInput;
}
