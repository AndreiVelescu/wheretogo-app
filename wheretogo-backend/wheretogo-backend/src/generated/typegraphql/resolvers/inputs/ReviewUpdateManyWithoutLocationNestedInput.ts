import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReviewCreateManyLocationInputEnvelope } from "../inputs/ReviewCreateManyLocationInputEnvelope";
import { ReviewCreateOrConnectWithoutLocationInput } from "../inputs/ReviewCreateOrConnectWithoutLocationInput";
import { ReviewCreateWithoutLocationInput } from "../inputs/ReviewCreateWithoutLocationInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutLocationInput } from "../inputs/ReviewUpdateManyWithWhereWithoutLocationInput";
import { ReviewUpdateWithWhereUniqueWithoutLocationInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutLocationInput";
import { ReviewUpsertWithWhereUniqueWithoutLocationInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutLocationInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";

@TypeGraphQL.InputType("ReviewUpdateManyWithoutLocationNestedInput", {})
export class ReviewUpdateManyWithoutLocationNestedInput {
  @TypeGraphQL.Field(_type => [ReviewCreateWithoutLocationInput], {
    nullable: true
  })
  create?: ReviewCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: ReviewCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpsertWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  upsert?: ReviewUpsertWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReviewCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: ReviewCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  set?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  delete?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: ReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateWithWhereUniqueWithoutLocationInput], {
    nullable: true
  })
  update?: ReviewUpdateWithWhereUniqueWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewUpdateManyWithWhereWithoutLocationInput], {
    nullable: true
  })
  updateMany?: ReviewUpdateManyWithWhereWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReviewScalarWhereInput[] | undefined;
}
