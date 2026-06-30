import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostCreateManyPostInputEnvelope } from "../inputs/SavedPostCreateManyPostInputEnvelope";
import { SavedPostCreateOrConnectWithoutPostInput } from "../inputs/SavedPostCreateOrConnectWithoutPostInput";
import { SavedPostCreateWithoutPostInput } from "../inputs/SavedPostCreateWithoutPostInput";
import { SavedPostScalarWhereInput } from "../inputs/SavedPostScalarWhereInput";
import { SavedPostUpdateManyWithWhereWithoutPostInput } from "../inputs/SavedPostUpdateManyWithWhereWithoutPostInput";
import { SavedPostUpdateWithWhereUniqueWithoutPostInput } from "../inputs/SavedPostUpdateWithWhereUniqueWithoutPostInput";
import { SavedPostUpsertWithWhereUniqueWithoutPostInput } from "../inputs/SavedPostUpsertWithWhereUniqueWithoutPostInput";
import { SavedPostWhereUniqueInput } from "../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.InputType("SavedPostUpdateManyWithoutPostNestedInput", {})
export class SavedPostUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field(_type => [SavedPostCreateWithoutPostInput], {
    nullable: true
  })
  create?: SavedPostCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  upsert?: SavedPostUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => SavedPostCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: SavedPostCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SavedPostUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true
  })
  update?: SavedPostUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostUpdateManyWithWhereWithoutPostInput], {
    nullable: true
  })
  updateMany?: SavedPostUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SavedPostScalarWhereInput[] | undefined;
}
