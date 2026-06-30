import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateOrConnectWithoutMediaInput } from "../inputs/PostCreateOrConnectWithoutMediaInput";
import { PostCreateWithoutMediaInput } from "../inputs/PostCreateWithoutMediaInput";
import { PostUpdateToOneWithWhereWithoutMediaInput } from "../inputs/PostUpdateToOneWithWhereWithoutMediaInput";
import { PostUpsertWithoutMediaInput } from "../inputs/PostUpsertWithoutMediaInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostUpdateOneRequiredWithoutMediaNestedInput", {})
export class PostUpdateOneRequiredWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => PostCreateWithoutMediaInput, {
    nullable: true
  })
  create?: PostCreateWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => PostCreateOrConnectWithoutMediaInput, {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => PostUpsertWithoutMediaInput, {
    nullable: true
  })
  upsert?: PostUpsertWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: true
  })
  connect?: PostWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateToOneWithWhereWithoutMediaInput, {
    nullable: true
  })
  update?: PostUpdateToOneWithWhereWithoutMediaInput | undefined;
}
