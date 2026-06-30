import {
  IsString,
  IsArray,
  IsOptional,
  IsUrl,
  MinLength,
} from 'class-validator';
export class CreateLocationDto {
  @IsString()
  @MinLength(2)
  name: string;
  @IsString()
  @MinLength(10)
  description: string;
  @IsString()
  type: string;
  @IsString()
  priceRange: string;
  @IsArray()
  @IsString({ each: true })
  vibes: string[];
  @IsString()
  address: string;
  @IsString()
  openHours: string;
  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  photos?: string[];
  @IsOptional()
  @IsUrl()
  menuPdf?: string;
}

export class UpdateLocationDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  name?: string;
  @IsOptional()
  @IsString()
  @MinLength(10)
  description?: string;
  @IsOptional()
  @IsString()
  type?: string;
  @IsOptional()
  @IsString()
  priceRange?: string;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  vibes?: string[];
  @IsOptional()
  @IsString()
  address?: string;
  @IsOptional()
  @IsString()
  openHours?: string;
  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  photos?: string[];
  @IsOptional()
  @IsUrl()
  menuPdf?: string;
}

export class LocationResponseDto {
  id: number;
  name: string;
  description: string;
  type: string;
  priceRange: string;
  vibes: string[];
  address: string;
  openHours: string;
  photos: string[];
  menuPdf?: string;
  createdAt: Date;
  averageRating?: number;
  reviewCount?: number;
  isHype?: boolean;
  isFavorite?: boolean;
}

export class LocationFilterDto {
  @IsOptional()
  @IsString()
  type?: string;
  @IsOptional()
  @IsString()
  priceRange?: string;
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  vibes?: string[];
  @IsOptional()
  @IsString()
  search?: string;
  @IsOptional()
  @IsString()
  sortBy?: 'rating' | 'newest' | 'trending' | 'name';
}
