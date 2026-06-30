import { UserRole } from '@prisma/client';
import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  IsEnum,
  IsNumber,
} from 'class-validator';
export class CreateUserDto {
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  nickname?: string;
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(6)
  password: string;
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

export class LoginUserDto {
  @IsEmail()
  email: string;
  @IsString()
  password: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;
  @IsOptional()
  @IsEmail()
  email?: string;
  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

export class UserResponseDto {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  _count?: {
    favorites: number;
    reviews: number;
    bookings: number;
    followers: number;
    following: number;
  };
}

export class AddFavoriteDto {
  @IsNumber()
  locationId: number;
}

export class AuthResponseDto {
  access_token: string;
  user: UserResponseDto;
}
