import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostCreateManyUserInputEnvelope } from "../inputs/SavedPostCreateManyUserInputEnvelope";
import { SavedPostCreateOrConnectWithoutUserInput } from "../inputs/SavedPostCreateOrConnectWithoutUserInput";
import { SavedPostCreateWithoutUserInput } from "../inputs/SavedPostCreateWithoutUserInput";
import { SavedPostWhereUniqueInput } from "../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.InputType("SavedPostCreateNestedManyWithoutUserInput", {})
export class SavedPostCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [SavedPostCreateWithoutUserInput], {
    nullable: true
  })
  create?: SavedPostCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SavedPostCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SavedPostCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SavedPostWhereUniqueInput], {
    nullable: true
  })
  connect?: SavedPostWhereUniqueInput[] | undefined;
}
