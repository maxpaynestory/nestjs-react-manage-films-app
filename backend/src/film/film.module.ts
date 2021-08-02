import { Module } from '@nestjs/common';
import { FilmModel } from '../models/film.model';
import { FilmService } from '../services/film/film.service';
import { FilmController } from './film.controller';

@Module({
  imports: [FilmModel],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
