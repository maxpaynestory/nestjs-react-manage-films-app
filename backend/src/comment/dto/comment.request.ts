import { IsEmail, IsNotEmpty } from 'class-validator';

export class CommentRequest {
  @IsNotEmpty()
  filmId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  comment: string;
}