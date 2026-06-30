import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PostCreateManyLocationInputEnvelope } from "../inputs/PostCreateManyLocationInputEnvelope";
import { PostCreateOrConnectWithoutLocationInput } from "../inputs/PostCreateOrConnectWithoutLocationInput";
import { PostCreateWithoutLocationInput } from "../inputs/PostCreateWithoutLocationInput";
import { PostWhereUniqueInput } from "../inputs/PostWhereUniqueInput";

@TypeGraphQL.InputType("PostCreateNestedManyWithoutLocationInput", {})
export class PostCreateNestedManyWithoutLocationInput {
  @TypeGraphQL.Field(_type => [PostCreateWithoutLocationInput], {
    nullable: true
  })
  create?: PostCreateWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PostCreateOrConnectWithoutLocationInput], {
    nullable: true
  })
  connectOrCreate?: PostCreateOrConnectWithoutLocationInput[] | undefined;

  @TypeGraphQL.Field(_type => PostCreateManyLocationInputEnvelope, {
    nullable: true
  })
  createMany?: PostCreateManyLocationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PostWhereUniqueInput], {
    nullable: true
  })
  connect?: PostWhereUniqueInput[] | undefined;
}
