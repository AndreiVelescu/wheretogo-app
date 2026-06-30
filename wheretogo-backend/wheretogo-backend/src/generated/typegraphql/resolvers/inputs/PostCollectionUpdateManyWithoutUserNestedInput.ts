import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionCreateManyUserInputEnvelope } from "../inputs/PostCollectionCreateManyUserInputEnvelope";
import { PostCollectionCreateOrConnectWithoutUserInput } from "../inputs/PostCollectionCreateOrConnectWithoutUserInput";
import { PostCollectionCreateWithoutUserInput } from "../inputs/PostCollectionCreateWithoutUserInput";
import { PostCollectionScalarWhereInput } from "../inputs/PostCollectionScalarWhereInput";
import { PostCollectionUpdateManyWithWhereWithoutUserInput } from "../inputs/PostCollectionUpdateManyWithWhereWithoutUserInput";
import { PostCollectionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PostCollectionUpdateWithWhereUniqueWithoutUserInput";
import { PostCollectionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PostCollectionUpsertWithWhereUniqueWithoutUserInput";
import { PostCollectionWhereUniqueInput } from "../inputs/PostCollectionWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionUpdateManyWithoutUserNestedInput", {})
export class PostCollectionUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [PostCollectionCreateWithoutUserInput], {
    nullable: true
  })
  create?: PostCollectionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PostCollectionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PostCollectionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCollectionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PostCollectionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionWhereUniqueInput], {
    nullable: true
  })
  set?: PostCollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostCollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionWhereUniqueInput], {
    nullable: true
  })
  delete?: PostCollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCollectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PostCollectionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PostCollectionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostCollectionScalarWhereInput[] | undefined;
}
