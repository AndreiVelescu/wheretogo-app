import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReviewsInput } from "../inputs/UserCreateOrConnectWithoutReviewsInput";
import { UserCreateWithoutReviewsInput } from "../inputs/UserCreateWithoutReviewsInput";
import { UserUpdateToOneWithWhereWithoutReviewsInput } from "../inputs/UserUpdateToOneWithWhereWithoutReviewsInput";
import { UserUpsertWithoutReviewsInput } from "../inputs/UserUpsertWithoutReviewsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReviewsNestedInput", {})
export class UserUpdateOneRequiredWithoutReviewsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReviewsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReviewsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReviewsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutReviewsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutReviewsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutReviewsInput | undefined;
}
