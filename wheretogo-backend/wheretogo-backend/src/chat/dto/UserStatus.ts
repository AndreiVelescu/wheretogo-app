import { ObjectType, Field, Int, registerEnumType } from 'type-graphql';

export enum UserStatusEnum {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  AWAY = 'AWAY',
}

registerEnumType(UserStatusEnum, {
  name: 'UserStatusEnum',
});

@ObjectType()
export class UserStatus {
  @Field(() => Int)
  userId: number;

  @Field(() => UserStatusEnum)
  status: UserStatusEnum;

  @Field(() => Date, { nullable: true })
  lastSeen?: Date;
}
