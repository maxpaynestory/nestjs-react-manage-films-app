import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { FilmService } from '../services/film/film.service';

@Controller('api/film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  /*@Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmService.create(createFilmDto);
  }*/

  @Get()
  findAll(@Query('limit') limit: number = 10, @Query('skip') skip: number = 0) {
    return this.filmService.findAll(limit, skip);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.filmService.findOneBySlug(slug);
  }

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmService.update(+id, updateFilmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmService.remove(+id);
  }*/
}
