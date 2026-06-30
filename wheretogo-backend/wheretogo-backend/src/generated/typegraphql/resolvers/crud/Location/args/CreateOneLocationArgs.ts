import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationCreateInput } from "../../../inputs/LocationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLocationArgs {
  @TypeGraphQL.Field(_type => LocationCreateInput, {
    nullable: false
  })
  data!: LocationCreateInput;
}
