import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { UserRole } from '@prisma/client';

// Register the UserRole enum for GraphQL
registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'User role in the system',
});

@ObjectType()
export class UserCount {
  @Field(() => Int)
  favorites!: number;

  @Field(() => Int)
  reviews!: number;

  @Field(() => Int)
  bookings!: number;

  @Field(() => Int)
  followers!: number;

  @Field(() => Int)
  following!: number;
}

@ObjectType()
export class User {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => String, { nullable: true })
  bio?: string;

  @Field(() => UserRole)
  role!: UserRole;

  @Field()
  createdAt!: Date;

  @Field(() => UserCount, { nullable: true })
  _count?: UserCount;
}

@ObjectType()
export class AuthResponse {
  @Field(() => String)
  access_token!: string;

  @Field(() => String)
  refresh_token!: string;

  @Field(() => User)
  user!: User;
}

@ObjectType()
export class RefreshTokenResponse {
  @Field()
  access_token!: string;

  @Field()
  refresh_token!: string;
}
