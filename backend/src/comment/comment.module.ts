import { Module } from '@nestjs/common';
import { FilmModel } from 'src/models/film.model';
import { FilmService } from 'src/services/film/film.service';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { CommentController } from './comment.controller';

@Module({ imports: [JwtStrategy, FilmModel], controllers: [CommentController], providers: [FilmService] })
export class CommentModule {}
