import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutCollectionsInput } from "../inputs/PostCreateOrConnectWithoutCollectionsInput";
import { PostCreateWithoutCollectionsInput } from "../inputs/PostCreateWithoutCollectionsInput";
import { PostUpdateToOneWithWhereWithoutCollectionsInput } from "../inputs/PostUpdateToOneWithWhereWithoutCollectionsInput";
import { PostUpsertWithoutCollectionsInput } from "../inputs/PostUpsertWithoutCollectionsInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutCollectionsNestedInput", {})
export class PostUpdateOneRequiredWithoutCollectionsNestedInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutCollectionsInput, {
    nullable: true
  })
  create?: PostCreateWithoutCollectionsInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutCollectionsInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutCollectionsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutCollectionsInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutCollectionsInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateToOneWithWhereWithoutCollectionsInput, {
    nullable: true
  })
  update?: PostUpdateToOneWithWhereWithoutCollectionsInput | undefined;
}
