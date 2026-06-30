import { registerEnumType } from 'type-graphql';

export enum MessageTypeGQL {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  SYSTEM = 'SYSTEM',
}

registerEnumType(MessageTypeGQL, {
  name: 'MessageType', // acesta va fi singurul tip cu acest nume în schema
  description: 'Type of the chat message',
});
