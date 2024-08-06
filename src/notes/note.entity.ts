import { IsNotEmpty, IsString, MaxLength, IsBoolean, IsOptional, IsArray, ArrayNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty({ description: 'The title of the note', maxLength: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiProperty({ description: 'The description of the note' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'The categories associated with the note' })
  @IsArray()
  @ArrayNotEmpty()
  categories: number[];

  @ApiProperty({ description: 'Indicates if the note is archived', default: false })
  @IsOptional()
  @IsBoolean()
  isArchived?: boolean;
}

export class Note {
  @ApiProperty({ description: 'The unique identifier of the note' })
  id: number;

  @ApiProperty({ description: 'The unique identifier of the user' })
  userId: number;

  @ApiProperty({ description: 'The title of the note' })
  title: string;

  @ApiProperty({ description: 'The description of the note' })
  description: string;

  @ApiProperty({ description: 'Indicates if the note is archived' })
  isArchived: boolean;

  @ApiProperty({ description: 'The categories associated with the note' })
  categories: number[];

  @ApiProperty({ description: 'The creation timestamp of the note' })
  createdAt: Date;

  @ApiProperty({ description: 'The last update timestamp of the note' })
  updatedAt: Date;
}
