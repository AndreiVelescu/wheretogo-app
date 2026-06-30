import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Location } from "../../models/Location";
import { User } from "../../models/User";

@TypeGraphQL.ObjectType("CreateManyAndReturnFavorite", {
  simpleResolvers: true
})
export class CreateManyAndReturnFavorite {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  locationId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  user!: User;

  @TypeGraphQL.Field(_type => Location, {
    nullable: false
  })
  location!: Location;
}
