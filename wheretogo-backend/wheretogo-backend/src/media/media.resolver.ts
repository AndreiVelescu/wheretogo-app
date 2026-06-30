import { Resolver, Mutation, Arg, Ctx } from 'type-graphql';
import { MediaService } from './media.service';
import {
  RequestUploadInput,
  RequestUploadOutput,
  ConfirmUploadInput,
  ConfirmUploadOutput,
} from './types';
import { getUserIdFromContext } from '../graphql/custom/auth.helpers';
import { PrismaService } from '../prisma/prisma.service';
import { MinioService } from '../minio/minio.service';

@Resolver()
export class MediaResolver {
  private readonly mediaService: MediaService;

  constructor(prismaService: PrismaService, minioService: MinioService) {
    this.mediaService = new MediaService(prismaService, minioService);
  }

  /**
   * Step 1: Request presigned upload URL
   * Client will use this URL to upload directly to MinIO
   */
  @Mutation(() => RequestUploadOutput)
  async requestUpload(
    @Arg('input') input: RequestUploadInput,
    @Ctx() ctx: any,
  ): Promise<RequestUploadOutput> {
    const userId = getUserIdFromContext(ctx);

    return this.mediaService.requestUpload(
      userId,
      input.filename,
      input.contentType,
    );
  }

  /**
   * Step 2: Confirm upload after client successfully uploads to MinIO
   * This verifies the file exists and saves metadata
   */
  @Mutation(() => ConfirmUploadOutput)
  async confirmUpload(
    @Arg('input') input: ConfirmUploadInput,
    @Ctx() ctx: any,
  ): Promise<ConfirmUploadOutput> {
    const userId = getUserIdFromContext(ctx);

    return this.mediaService.confirmUpload(userId, input.fileKey);
  }

  /**
   * Delete uploaded file
   */
  @Mutation(() => Boolean)
  async deleteUpload(
    @Arg('fileKey') fileKey: string,
    @Ctx() ctx: any,
  ): Promise<boolean> {
    const userId = getUserIdFromContext(ctx);

    return this.mediaService.deleteUpload(userId, fileKey);
  }
}
