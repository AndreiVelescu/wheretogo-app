import {
  Injectable,
  NotFoundException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaClient, User, UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserDto,
  UserResponseDto,
  AddFavoriteDto,
} from './dto/user.dto';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  constructor(private jwtService: JwtService) {}

  async register(user: CreateUserDto): Promise<{
    user: UserResponseDto;
    access_token: string;
    refresh_token: string;
  }> {
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });
    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    if (user.nickname) {
      const existingNickname = await prisma.user.findUnique({
        where: { nickname: user.nickname },
      });
      if (existingNickname) {
        throw new ConflictException('Nickname already taken');
      }
    }

    const hashed = await bcrypt.hash(user.password, 10);
    const createdUser = await prisma.user.create({
      data: {
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        password: hashed,
        role: user.role || UserRole.USER,
      },
    });

    const payload = {
      sub: createdUser.id,
      email: createdUser.email,
      role: createdUser.role,
    };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '1m' });
    const refreshToken = await this.generateRefreshToken(createdUser.id);

    return {
      user: this.transformToResponseDto(createdUser),
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async login(user: LoginUserDto): Promise<{
    access_token: string;
    refresh_token: string;
    user: UserResponseDto;
  }> {
    const validateUser = await prisma.user.findUnique({
      where: { email: user.email },
    });
    if (
      !validateUser ||
      !validateUser.password ||
      !(await bcrypt.compare(user.password, validateUser.password))
    ) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = {
      sub: validateUser.id,
      email: validateUser.email,
      role: validateUser.role,
    };
    console.log('Validated User:', payload);

    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = await this.generateRefreshToken(validateUser.id);

    console.log('[login] Returning tokens:', {
      access_token: accessToken.substring(0, 20) + '...',
      refresh_token: refreshToken
        ? refreshToken.substring(0, 20) + '...'
        : 'NULL',
      user: validateUser.email,
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user: this.transformToResponseDto(validateUser),
    };
  }

  async generateRefreshToken(userId: number): Promise<string> {
    console.log('[generateRefreshToken] Starting for userId:', userId);
    const token = require('crypto').randomBytes(64).toString('hex');
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30); // 30 zile

    console.log(
      '[generateRefreshToken] Generated token:',
      token.substring(0, 20) + '...',
    );

    await prisma.refreshToken.create({
      data: {
        token,
        userId,
        expiresAt,
      },
    });

    console.log('[generateRefreshToken] Token saved to DB');
    return token;
  }

  async refreshAccessToken(
    refreshToken: string,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const storedToken = await prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      include: { user: true },
    });

    if (!storedToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    if (new Date() > storedToken.expiresAt) {
      await prisma.refreshToken.delete({ where: { id: storedToken.id } });
      throw new UnauthorizedException('Refresh token expired');
    }

    const payload = {
      sub: storedToken.user.id,
      email: storedToken.user.email,
      role: storedToken.user.role,
    };

    const newAccessToken = this.jwtService.sign(payload, { expiresIn: '15m' });

    // Optional: Rotate refresh token pentru mai multă securitate
    await prisma.refreshToken.delete({ where: { id: storedToken.id } });
    const newRefreshToken = await this.generateRefreshToken(
      storedToken.user.id,
    );

    return {
      access_token: newAccessToken,
      refresh_token: newRefreshToken,
    };
  }

  async revokeRefreshToken(refreshToken: string): Promise<void> {
    await prisma.refreshToken.deleteMany({
      where: { token: refreshToken },
    });
  }

  async getAllUsers(): Promise<UserResponseDto[]> {
    const users = await prisma.user.findMany({
      include: {
        _count: {
          select: {
            favorites: true,
            reviews: true,
            bookings: true,
            followers: true,
            following: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    return users.map((user) => this.transformToResponseDto(user));
  }

  async searchUsers(query: string, limit = 12): Promise<UserResponseDto[]> {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      return [];
    }

    const users = await prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: normalizedQuery, mode: 'insensitive' } },
          { nickname: { contains: normalizedQuery, mode: 'insensitive' } },
        ],
      },
      include: {
        _count: {
          select: {
            favorites: true,
            reviews: true,
            bookings: true,
            followers: true,
            following: true,
          },
        },
      },
      take: Math.max(1, Math.min(limit, 30)),
      orderBy: { createdAt: 'desc' },
    });

    const lowerQuery = normalizedQuery.toLowerCase();

    return users
      .sort((left, right) => {
        const leftName = left.name.toLowerCase();
        const rightName = right.name.toLowerCase();
        const leftNickname = left.nickname?.toLowerCase() || '';
        const rightNickname = right.nickname?.toLowerCase() || '';

        const leftExact = Number(
          leftName === lowerQuery || leftNickname === lowerQuery,
        );
        const rightExact = Number(
          rightName === lowerQuery || rightNickname === lowerQuery,
        );

        if (leftExact !== rightExact) {
          return rightExact - leftExact;
        }

        const leftStartsWith = Number(
          leftName.startsWith(lowerQuery) ||
            leftNickname.startsWith(lowerQuery),
        );
        const rightStartsWith = Number(
          rightName.startsWith(lowerQuery) ||
            rightNickname.startsWith(lowerQuery),
        );

        if (leftStartsWith !== rightStartsWith) {
          return rightStartsWith - leftStartsWith;
        }

        return (right._count?.followers || 0) - (left._count?.followers || 0);
      })
      .map((user) => this.transformToResponseDto(user));
  }

  async getUserById(id: number): Promise<UserResponseDto> {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            favorites: true,
            reviews: true,
            bookings: true,
            followers: true,
            following: true,
          },
        },
        favorites: {
          include: { location: true },
        },
        reviews: {
          include: { location: true },
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.transformToResponseDto(user);
  }

  async getProfile(userId: number): Promise<UserResponseDto> {
    return this.getUserById(userId);
  }

  async getUserName(userId: number): Promise<string> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true },
    });
    return user?.name ?? 'Cineva';
  }

  async updateUser(
    id: number,
    updateData: UpdateUserDto,
  ): Promise<UserResponseDto> {
    const existingUser = await prisma.user.findUnique({ where: { id } });
    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    if (updateData.email && updateData.email !== existingUser.email) {
      const emailExists = await prisma.user.findUnique({
        where: { email: updateData.email },
      });
      if (emailExists) {
        throw new ConflictException('Email already exists');
      }
    }

    const dataToUpdate: any = { ...updateData };
    if (updateData.password) {
      dataToUpdate.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: dataToUpdate,
      include: {
        _count: {
          select: {
            favorites: true,
            reviews: true,
            bookings: true,
            followers: true,
            following: true,
          },
        },
      },
    });

    return this.transformToResponseDto(updatedUser);
  }

  async deleteUser(id: number): Promise<{ message: string }> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    await prisma.user.delete({ where: { id } });
    return { message: 'User deleted successfully' };
  }

  async getOneFavorite(locationId: number, userId: number) {
    console.log(
      'Checking favorite for userId:',
      userId,
      'locationId:',
      locationId,
    );
    return prisma.favorite.findFirst({
      where: { userId, locationId },
    });
  }
  async addFavorite(
    userId: number,
    addFavoriteDto: AddFavoriteDto,
  ): Promise<{ message: string }> {
    console.log(
      'addFavorite called with userId:',
      userId,
      'locationId:',
      addFavoriteDto.locationId,
    );
    const location = await prisma.location.findUnique({
      where: { id: addFavoriteDto.locationId },
    });
    if (!location) {
      throw new NotFoundException('Location not found');
    }

    const existingFavorite = await prisma.favorite.findFirst({
      where: { userId, locationId: addFavoriteDto.locationId },
    });

    if (existingFavorite) {
      await this.removeFavorite(userId, addFavoriteDto.locationId);
      return { message: 'Location removed from favorites' };
    }

    console.log(
      'Creating favorite with userId:',
      userId,
      'locationId:',
      addFavoriteDto.locationId,
    );
    await prisma.favorite.create({
      data: { userId, locationId: addFavoriteDto.locationId },
    });

    return { message: 'Location added to favorites' };
  }

  async removeFavorite(
    userId: number,
    locationId: number,
  ): Promise<{ message: string }> {
    const favorite = await prisma.favorite.findFirst({
      where: { userId, locationId },
    });

    if (!favorite) {
      throw new NotFoundException('Favorite not found');
    }

    await prisma.favorite.delete({ where: { id: favorite.id } });
    return { message: 'Location removed from favorites' };
  }

  async getFavorites(userId: number) {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: {
        location: {
          include: {
            reviews: {
              select: { rating: true },
            },
            _count: {
              select: { reviews: true, favorites: true },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return favorites.map((fav) => ({
      ...fav.location,
      averageRating:
        fav.location.reviews.length > 0
          ? fav.location.reviews.reduce((sum, r) => sum + r.rating, 0) /
            fav.location.reviews.length
          : 0,
      reviewCount: fav.location._count.reviews,
      favoriteCount: fav.location._count.favorites,
    }));
  }

  async isFollowing(userId: number, targetUserId: number): Promise<boolean> {
    const follow = await prisma.follower.findFirst({
      where: { userId: targetUserId, followerId: userId },
    });
    return !!follow;
  }

  async followUser(
    userId: number,
    targetUserId: number,
  ): Promise<{ message: string }> {
    if (userId === targetUserId) {
      throw new ConflictException('Cannot follow yourself');
    }

    const targetUser = await prisma.user.findUnique({
      where: { id: targetUserId },
    });
    if (!targetUser) {
      throw new NotFoundException('Target user not found');
    }

    const existingFollow = await prisma.follower.findFirst({
      where: { userId: targetUserId, followerId: userId },
    });

    if (existingFollow) {
      throw new ConflictException('Already following this user');
    }

    await prisma.follower.create({
      data: { userId: targetUserId, followerId: userId },
    });

    return { message: 'User followed successfully' };
  }

  async unfollowUser(
    userId: number,
    targetUserId: number,
  ): Promise<{ message: string }> {
    const follow = await prisma.follower.findFirst({
      where: { userId: targetUserId, followerId: userId },
    });

    if (!follow) {
      throw new NotFoundException('Not following this user');
    }

    await prisma.follower.delete({ where: { id: follow.id } });
    return { message: 'User unfollowed successfully' };
  }

  async getFollowers(userId: number): Promise<UserResponseDto[]> {
    const followers = await prisma.follower.findMany({
      where: { userId },
      include: {
        follower: {
          include: {
            _count: {
              select: {
                favorites: true,
                reviews: true,
                bookings: true,
                followers: true,
                following: true,
              },
            },
          },
        },
      },
    });

    return followers.map((follow) =>
      this.transformToResponseDto(follow.follower),
    );
  }

  async getFollowing(userId: number): Promise<UserResponseDto[]> {
    const following = await prisma.follower.findMany({
      where: { followerId: userId },
      include: {
        user: {
          include: {
            _count: {
              select: {
                favorites: true,
                reviews: true,
                bookings: true,
                followers: true,
                following: true,
              },
            },
          },
        },
      },
    });

    return following.map((follow) => this.transformToResponseDto(follow.user));
  }

  private transformToResponseDto(user: any): UserResponseDto {
    const { password, ...userWithoutPassword } = user;
    return {
      ...userWithoutPassword,
      _count: user._count || undefined,
    } as UserResponseDto;
  }

  /**
   * Update user avatar URL.
   * Flow: frontend does requestUpload → uploads to MinIO → confirmUpload → gets URL → calls this.
   * If user already has an avatar from MinIO, the old file key is returned so frontend can clean up.
   */
  async addAvatar(userId: number, avatarUrl: string): Promise<UserResponseDto> {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { avatar: avatarUrl },
      include: {
        _count: {
          select: {
            favorites: true,
            reviews: true,
            bookings: true,
            followers: true,
            following: true,
          },
        },
      },
    });

    return this.transformToResponseDto(updatedUser);
  }

  async removeAvatar(userId: number): Promise<UserResponseDto> {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { avatar: null },
      include: {
        _count: {
          select: {
            favorites: true,
            reviews: true,
            bookings: true,
            followers: true,
            following: true,
          },
        },
      },
    });

    return this.transformToResponseDto(updatedUser);
  }

  async isNicknameAvailable(nickname: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { nickname },
    });
    return !user;
  }
}
