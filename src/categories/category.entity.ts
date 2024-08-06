import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ description: 'The name of the category', maxLength: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @ApiProperty({ description: 'The color of the category', maxLength: 11 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(11)
  color: string;
}

export class Category {
  @ApiProperty({ description: 'The unique identifier of the category' })
  id: number;

  @ApiProperty({ description: 'The name of the category' })
  name: string;

  @ApiProperty({ description: 'The color of the category' })
  color: string;

  @ApiProperty({ description: 'The creation timestamp of the category' })
  createdAt: Date;

  @ApiProperty({ description: 'The last update timestamp of the category' })
  updatedAt: Date;
}
