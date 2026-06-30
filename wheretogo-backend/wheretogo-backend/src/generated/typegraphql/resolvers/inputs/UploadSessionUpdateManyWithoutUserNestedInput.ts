import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UploadSessionCreateManyUserInputEnvelope } from "../inputs/UploadSessionCreateManyUserInputEnvelope";
import { UploadSessionCreateOrConnectWithoutUserInput } from "../inputs/UploadSessionCreateOrConnectWithoutUserInput";
import { UploadSessionCreateWithoutUserInput } from "../inputs/UploadSessionCreateWithoutUserInput";
import { UploadSessionScalarWhereInput } from "../inputs/UploadSessionScalarWhereInput";
import { UploadSessionUpdateManyWithWhereWithoutUserInput } from "../inputs/UploadSessionUpdateManyWithWhereWithoutUserInput";
import { UploadSessionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UploadSessionUpdateWithWhereUniqueWithoutUserInput";
import { UploadSessionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UploadSessionUpsertWithWhereUniqueWithoutUserInput";
import { UploadSessionWhereUniqueInput } from "../inputs/UploadSessionWhereUniqueInput";

@TypeGraphQL.InputType("UploadSessionUpdateManyWithoutUserNestedInput", {})
export class UploadSessionUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [UploadSessionCreateWithoutUserInput], {
    nullable: true
  })
  create?: UploadSessionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UploadSessionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UploadSessionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UploadSessionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UploadSessionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionWhereUniqueInput], {
    nullable: true
  })
  set?: UploadSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UploadSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionWhereUniqueInput], {
    nullable: true
  })
  delete?: UploadSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionWhereUniqueInput], {
    nullable: true
  })
  connect?: UploadSessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UploadSessionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UploadSessionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UploadSessionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UploadSessionScalarWhereInput[] | undefined;
}
