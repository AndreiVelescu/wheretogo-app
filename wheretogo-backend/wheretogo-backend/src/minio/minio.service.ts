import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Client } from 'minio';
import { MINIO_TOKEN } from './minio.decorator';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MinioService implements OnModuleInit {
  private readonly bucket: string;

  constructor(
    @Inject(MINIO_TOKEN) private readonly minio: Client,
    private readonly configService: ConfigService,
  ) {
    this.bucket = this.configService.get<string>('MINIO_BUCKET', 'wheretogo');
  }

  async onModuleInit() {
    const exists = await this.minio.bucketExists(this.bucket);
    if (!exists) {
      await this.minio.makeBucket(this.bucket);
      console.log(`🪣 MinIO bucket created: ${this.bucket}`);
    }

    // Set bucket policy to allow public read for uploads
    const policy = {
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Principal: { AWS: ['*'] },
          Action: ['s3:GetObject'],
          Resource: [`arn:aws:s3:::${this.bucket}/uploads/*`],
        },
      ],
    };

    try {
      await this.minio.setBucketPolicy(this.bucket, JSON.stringify(policy));
      console.log(`🔓 MinIO bucket policy set for public access`);
    } catch (error) {
      console.warn('Could not set bucket policy:', error.message);
    }
  }

  /**
   * Generate presigned PUT URL for direct upload
   */
  async generatePresignedUploadUrl(
    filename: string,
    contentType: string,
    userId: number,
  ): Promise<{ uploadUrl: string; fileKey: string; expiresIn: number }> {
    const extension = filename.split('.').pop();
    const fileKey = `uploads/${userId}/${uuidv4()}.${extension}`;
    const expiresIn = 15 * 60; // 15 minutes

    const uploadUrl = await this.minio.presignedPutObject(
      this.bucket,
      fileKey,
      expiresIn,
    );

    return {
      uploadUrl,
      fileKey,
      expiresIn,
    };
  }

  /**
   * Verify that file exists in MinIO
   */
  async fileExists(fileKey: string): Promise<boolean> {
    try {
      await this.minio.statObject(this.bucket, fileKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Get file metadata
   */
  async getFileMetadata(fileKey: string) {
    const stat = await this.minio.statObject(this.bucket, fileKey);
    return {
      size: stat.size,
      contentType:
        stat.metaData?.['content-type'] || 'application/octet-stream',
      etag: stat.etag,
      lastModified: stat.lastModified,
    };
  }

  /**
   * Generate public URL for a file (for public bucket paths)
   */
  getPublicUrl(fileKey: string): string {
    const configuredPublicBase =
      this.configService.get<string>('MINIO_PUBLIC_URL');

    if (configuredPublicBase) {
      const publicBase = configuredPublicBase.replace(/\/$/, '');
      const bucketBase = publicBase.endsWith(`/${this.bucket}`)
        ? publicBase
        : `${publicBase}/${this.bucket}`;

      const url = `${bucketBase}/${fileKey}`;
      console.log('🔗 Generated public URL from MINIO_PUBLIC_URL:', url);
      return url;
    }

    const endpoint = this.configService.get<string>('MINIO_ENDPOINT');
    const port = this.configService.get<number>('MINIO_PORT', 9000);
    const useSSL = this.configService.get<string>('MINIO_USE_SSL') === 'true';

    const protocol = useSSL ? 'https' : 'http';
    const portSuffix =
      (useSSL && port === 443) || (!useSSL && port === 80) ? '' : `:${port}`;

    const url = `${protocol}://${endpoint}${portSuffix}/${this.bucket}/${fileKey}`;

    console.log('🔗 Generated public URL:', url);

    return url;
  }

  /**
   * Generate presigned GET URL for temporary access to private files
   */
  async generatePresignedDownloadUrl(
    fileKey: string,
    expiresIn: number = 60 * 60, // 1 hour
  ): Promise<string> {
    return this.minio.presignedGetObject(this.bucket, fileKey, expiresIn);
  }

  /**
   * Delete file from MinIO
   */
  async deleteFile(fileKey: string): Promise<void> {
    await this.minio.removeObject(this.bucket, fileKey);
  }

  /**
   * Move file from temporary location to permanent location
   */
  async moveFile(sourceKey: string, destKey: string): Promise<void> {
    await this.minio.copyObject(
      this.bucket,
      destKey,
      `/${this.bucket}/${sourceKey}`,
    );
    await this.deleteFile(sourceKey);
  }

  /**
   * Upload file directly (for server-side uploads)
   */
  async uploadFile(
    buffer: Buffer,
    fileKey: string,
    contentType: string,
  ): Promise<void> {
    await this.minio.putObject(this.bucket, fileKey, buffer, buffer.length, {
      'Content-Type': contentType,
    });
  }
}
