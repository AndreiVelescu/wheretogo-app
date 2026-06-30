import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostCreateManyUserInputEnvelope } from "../inputs/SavedPostCreateManyUserInputEnvelope";
import { SavedPostCreateOrConnectWithoutUserInput } from "../inputs/SavedPostCreateOrConnectWithoutUserInput";
import { SavedPostCreateWithoutUserInput } from "../inputs/SavedPostCreateWithoutUserInput";
import { SavedPostScalarWhereInput } from "../inputs/SavedPostScalarWhereInput";
import { SavedPostUpdateManyWithWhereWithoutUserInput } from "../inputs/SavedPostUpdateManyWithWhereWithoutUserInput";
import { SavedPostUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SavedPostUpdateWithWhereUniqueWithoutUserInput";
import { SavedPostUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SavedPostUpsertWithWhereUniqueWithoutUserInput";
import { SavedPostWhereUniqueInput } from "../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.InputType("SavedPostUpdateManyWithoutUserNestedInput", {})
export class SavedPostUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [SavedPostCreateWithoutUserInput], {
    nullable: true
  })
  create?: SavedPostCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: SavedPostCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: SavedPostUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => SavedPostCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: SavedPostCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SavedPostWhereUniqueInput], {
    nullable: true
  })
  set?: SavedPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SavedPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostWhereUniqueInput], {
    nullable: true
  })
  delete?: SavedPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostWhereUniqueInput], {
    nullable: true
  })
  connect?: SavedPostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: SavedPostUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: SavedPostUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SavedPostScalarWhereInput[] | undefined;
}
