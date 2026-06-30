import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SavedPostCreateManyPostInputEnvelope } from "../inputs/SavedPostCreateManyPostInputEnvelope";
import { SavedPostCreateOrConnectWithoutPostInput } from "../inputs/SavedPostCreateOrConnectWithoutPostInput";
import { SavedPostCreateWithoutPostInput } from "../inputs/SavedPostCreateWithoutPostInput";
import { SavedPostWhereUniqueInput } from "../inputs/SavedPostWhereUniqueInput";

@TypeGraphQL.InputType("SavedPostCreateNestedManyWithoutPostInput", {})
export class SavedPostCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field(_type => [SavedPostCreateWithoutPostInput], {
    nullable: true
  })
  create?: SavedPostCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => [SavedPostCreateOrConnectWithoutPostInput], {
    nullable: true
  })
  connectOrCreate?: SavedPostCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field(_type => SavedPostCreateManyPostInputEnvelope, {
    nullable: true
  })
  createMany?: SavedPostCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SavedPostWhereUniqueInput], {
    nullable: true
  })
  connect?: SavedPostWhereUniqueInput[] | undefined;
}
