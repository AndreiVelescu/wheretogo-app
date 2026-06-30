import { Field, InputType, ObjectType, Int } from 'type-graphql';

// ─────────────────────────────────────────────────────────
// INPUT TYPES
// ─────────────────────────────────────────────────────────

@InputType()
export class RequestUploadInput {
  @Field(() => String)
  filename!: string;

  @Field(() => String)
  contentType!: string;
}

@InputType()
export class ConfirmUploadInput {
  @Field(() => String)
  fileKey!: string;
}

// ─────────────────────────────────────────────────────────
// OUTPUT TYPES
// ─────────────────────────────────────────────────────────

@ObjectType()
export class RequestUploadOutput {
  @Field(() => String)
  uploadUrl!: string;

  @Field(() => String)
  fileKey!: string;

  @Field(() => Int)
  sessionId!: number;

  @Field(() => Int)
  expiresIn!: number;

  @Field(() => Date)
  expiresAt!: Date;
}

@ObjectType()
export class ConfirmUploadOutput {
  @Field(() => Boolean)
  success!: boolean;

  @Field(() => String)
  fileKey!: string;

  @Field(() => String)
  url!: string;

  @Field(() => Int)
  size!: number;

  @Field(() => String)
  contentType!: string;
}
