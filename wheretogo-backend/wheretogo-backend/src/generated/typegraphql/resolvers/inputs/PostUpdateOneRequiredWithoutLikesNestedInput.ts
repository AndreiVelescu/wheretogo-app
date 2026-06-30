import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutLikesInput } from "../inputs/PostCreateOrConnectWithoutLikesInput";
import { PostCreateWithoutLikesInput } from "../inputs/PostCreateWithoutLikesInput";
import { PostUpdateToOneWithWhereWithoutLikesInput } from "../inputs/PostUpdateToOneWithWhereWithoutLikesInput";
import { PostUpsertWithoutLikesInput } from "../inputs/PostUpsertWithoutLikesInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutLikesNestedInput", {})
export class PostUpdateOneRequiredWithoutLikesNestedInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutLikesInput, {
    nullable: true
  })
  create?: PostCreateWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutLikesInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutLikesInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutLikesInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateToOneWithWhereWithoutLikesInput, {
    nullable: true
  })
  update?: PostUpdateToOneWithWhereWithoutLikesInput | undefined;
}
