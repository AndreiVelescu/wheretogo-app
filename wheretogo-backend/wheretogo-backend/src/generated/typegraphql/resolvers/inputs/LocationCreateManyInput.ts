import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocationCreatephotosInput } from "../inputs/LocationCreatephotosInput";
import { LocationCreatetypesInput } from "../inputs/LocationCreatetypesInput";
import { LocationCreatevibesInput } from "../inputs/LocationCreatevibesInput";

@TypeGraphQL.InputType("LocationCreateManyInput", {})
export class LocationCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  placeId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => LocationCreatetypesInput, {
    nullable: true
  })
  types?: LocationCreatetypesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priceRange?: string | undefined;

  @TypeGraphQL.Field(_type => LocationCreatevibesInput, {
    nullable: true
  })
  vibes?: LocationCreatevibesInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lat?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  lng?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  rating?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  userRatingsTotal?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  googleUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  openHours?: string | undefined;

  @TypeGraphQL.Field(_type => LocationCreatephotosInput, {
    nullable: true
  })
  photos?: LocationCreatephotosInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  menuPdf?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  popularityScore?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  estimatedCost?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  googleImported?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
