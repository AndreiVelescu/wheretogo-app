import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCollectionItemCreateManyCollectionInputEnvelope } from "../inputs/PostCollectionItemCreateManyCollectionInputEnvelope";
import { PostCollectionItemCreateOrConnectWithoutCollectionInput } from "../inputs/PostCollectionItemCreateOrConnectWithoutCollectionInput";
import { PostCollectionItemCreateWithoutCollectionInput } from "../inputs/PostCollectionItemCreateWithoutCollectionInput";
import { PostCollectionItemScalarWhereInput } from "../inputs/PostCollectionItemScalarWhereInput";
import { PostCollectionItemUpdateManyWithWhereWithoutCollectionInput } from "../inputs/PostCollectionItemUpdateManyWithWhereWithoutCollectionInput";
import { PostCollectionItemUpdateWithWhereUniqueWithoutCollectionInput } from "../inputs/PostCollectionItemUpdateWithWhereUniqueWithoutCollectionInput";
import { PostCollectionItemUpsertWithWhereUniqueWithoutCollectionInput } from "../inputs/PostCollectionItemUpsertWithWhereUniqueWithoutCollectionInput";
import { PostCollectionItemWhereUniqueInput } from "../inputs/PostCollectionItemWhereUniqueInput";

@TypeGraphQL.InputType("PostCollectionItemUpdateManyWithoutCollectionNestedInput", {})
export class PostCollectionItemUpdateManyWithoutCollectionNestedInput {
  @TypeGraphQL.Field(_type => [PostCollectionItemCreateWithoutCollectionInput], {
    nullable: true
  })
  create?: PostCollectionItemCreateWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemCreateOrConnectWithoutCollectionInput], {
    nullable: true
  })
  connectOrCreate?: PostCollectionItemCreateOrConnectWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemUpsertWithWhereUniqueWithoutCollectionInput], {
    nullable: true
  })
  upsert?: PostCollectionItemUpsertWithWhereUniqueWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCollectionItemCreateManyCollectionInputEnvelope, {
    nullable: true
  })
  createMany?: PostCollectionItemCreateManyCollectionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereUniqueInput], {
    nullable: true
  })
  set?: PostCollectionItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PostCollectionItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereUniqueInput], {
    nullable: true
  })
  delete?: PostCollectionItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemWhereUniqueInput], {
    nullable: true
  })
  connect?: PostCollectionItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemUpdateWithWhereUniqueWithoutCollectionInput], {
    nullable: true
  })
  update?: PostCollectionItemUpdateWithWhereUniqueWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemUpdateManyWithWhereWithoutCollectionInput], {
    nullable: true
  })
  updateMany?: PostCollectionItemUpdateManyWithWhereWithoutCollectionInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCollectionItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PostCollectionItemScalarWhereInput[] | undefined;
}
