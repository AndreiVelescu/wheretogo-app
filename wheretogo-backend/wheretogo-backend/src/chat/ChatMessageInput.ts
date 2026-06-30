import * as TypeGraphQL from 'type-graphql';

import { MessageType } from '../generated/typegraphql';

@TypeGraphQL.InputType('MessageCreateInput', {})
export class MessageCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  content!: string;
  @TypeGraphQL.Field((_type) => Number, {
    nullable: true,
  })
  roomId?: number | undefined;

  @TypeGraphQL.Field((_type) => MessageType, {
    nullable: true,
  })
  type?: 'TEXT' | 'IMAGE' | 'LOCATION' | 'FILE' | 'SYSTEM' | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;
}
