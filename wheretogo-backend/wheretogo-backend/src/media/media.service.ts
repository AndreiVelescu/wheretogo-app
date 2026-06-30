import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MinioService } from '../minio/minio.service';
import { UploadStatus } from '@prisma/client';

@Injectable()
export class MediaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly minio: MinioService,
  ) {}

  /**
   * Step 1: Generate presigned upload URL
   */
  async requestUpload(userId: number, filename: string, contentType: string) {
    // Generate presigned URL from MinIO
    const { uploadUrl, fileKey, expiresIn } =
      await this.minio.generatePresignedUploadUrl(
        filename,
        contentType,
        userId,
      );

    // Create upload session in DB
    const expiresAt = new Date(Date.now() + expiresIn * 1000);
    const session = await this.prisma.uploadSession.create({
      data: {
        userId,
        fileKey,
        filename,
        contentType,
        status: UploadStatus.PENDING,
        expiresAt,
      },
    });

    return {
      uploadUrl,
      fileKey,
      sessionId: session.id,
      expiresIn,
      expiresAt,
    };
  }

  /**
   * Step 2: Confirm upload after client uploads to MinIO
   */
  async confirmUpload(userId: number, fileKey: string) {
    // Find upload session
    const session = await this.prisma.uploadSession.findUnique({
      where: { fileKey },
    });

    if (!session) {
      throw new Error('Upload session not found');
    }

    if (session.userId !== userId) {
      throw new Error('Unauthorized');
    }

    if (session.status !== UploadStatus.PENDING) {
      throw new Error(`Upload already ${session.status.toLowerCase()}`);
    }

    if (session.expiresAt < new Date()) {
      await this.prisma.uploadSession.update({
        where: { id: session.id },
        data: { status: UploadStatus.EXPIRED },
      });
      throw new Error('Upload session expired');
    }

    // Verify file exists in MinIO
    const exists = await this.minio.fileExists(fileKey);
    if (!exists) {
      await this.prisma.uploadSession.update({
        where: { id: session.id },
        data: { status: UploadStatus.FAILED },
      });
      throw new Error('File not found in storage');
    }

    // Get file metadata
    const metadata = await this.minio.getFileMetadata(fileKey);

    // Update session
    await this.prisma.uploadSession.update({
      where: { id: session.id },
      data: {
        status: UploadStatus.UPLOADED,
        size: metadata.size,
        confirmedAt: new Date(),
      },
    });

    // Generate public URL
    const publicUrl = this.minio.getPublicUrl(fileKey);

    return {
      success: true,
      fileKey,
      url: publicUrl,
      size: metadata.size,
      contentType: metadata.contentType,
    };
  }

  /**
   * Mark upload as confirmed/used (when attached to post)
   */
  async markAsConfirmed(fileKey: string) {
    await this.prisma.uploadSession.update({
      where: { fileKey },
      data: { status: UploadStatus.CONFIRMED },
    });
  }

  /**
   * Cleanup expired upload sessions
   */
  async cleanupExpiredUploads() {
    const expired = await this.prisma.uploadSession.findMany({
      where: {
        status: UploadStatus.PENDING,
        expiresAt: { lt: new Date() },
      },
    });

    for (const session of expired) {
      try {
        await this.minio.deleteFile(session.fileKey);
      } catch (error) {
        console.error(`Failed to delete file ${session.fileKey}:`, error);
      }

      await this.prisma.uploadSession.update({
        where: { id: session.id },
        data: { status: UploadStatus.EXPIRED },
      });
    }

    return expired.length;
  }

  /**
   * Get upload session by fileKey
   */
  async getUploadSession(fileKey: string) {
    return this.prisma.uploadSession.findUnique({
      where: { fileKey },
    });
  }

  /**
   * Delete file and session
   */
  async deleteUpload(userId: number, fileKey: string) {
    const session = await this.prisma.uploadSession.findUnique({
      where: { fileKey },
    });

    if (!session || session.userId !== userId) {
      throw new Error('Upload not found or unauthorized');
    }

    await this.minio.deleteFile(fileKey);
    await this.prisma.uploadSession.delete({ where: { id: session.id } });

    return true;
  }
}
