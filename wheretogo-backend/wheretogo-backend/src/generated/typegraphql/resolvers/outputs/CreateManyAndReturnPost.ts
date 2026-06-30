import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnPostLocationArgs } from "./args/CreateManyAndReturnPostLocationArgs";
import { CreateManyAndReturnPostTripArgs } from "./args/CreateManyAndReturnPostTripArgs";
import { Location } from "../../models/Location";
import { Trip } from "../../models/Trip";
import { User } from "../../models/User";
import { PostType } from "../../enums/PostType";
import { PostVisibility } from "../../enums/PostVisibility";

@TypeGraphQL.ObjectType("CreateManyAndReturnPost", {
  simpleResolvers: true
})
export class CreateManyAndReturnPost {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  authorId!: number;

  @TypeGraphQL.Field(_type => PostType, {
    nullable: false
  })
  type!: "EXPERIENCE" | "TIP" | "TRIP";

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  tags!: string[] | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likesCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  commentsCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  savedCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sharesCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  viewsCount!: number;

  @TypeGraphQL.Field(_type => PostVisibility, {
    nullable: false
  })
  visibility!: "PUBLIC" | "FRIENDS" | "PRIVATE";

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  locationId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  tripId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  publishedAt!: Date | null;

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  author!: User;

  location!: Location | null;
  trip!: Trip | null;

  @TypeGraphQL.Field(_type => Location, {
    name: "location",
    nullable: true
  })
  getLocation(@TypeGraphQL.Root() root: CreateManyAndReturnPost, @TypeGraphQL.Args() args: CreateManyAndReturnPostLocationArgs): Location | null {
    return root.location;
  }

  @TypeGraphQL.Field(_type => Trip, {
    name: "trip",
    nullable: true
  })
  getTrip(@TypeGraphQL.Root() root: CreateManyAndReturnPost, @TypeGraphQL.Args() args: CreateManyAndReturnPostTripArgs): Trip | null {
    return root.trip;
  }
}
