import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FilmService } from 'src/services/film/film.service';
import { CommentRequest } from './dto/comment.request';

@Controller('api/comment')
@UseGuards(AuthGuard('jwt'))
export class CommentController {
    constructor(private readonly filmService: FilmService) {}

    @Post()
    async postNewComment(@Body() body: CommentRequest){
        return await this.filmService.addCommentToFilm(body.filmId, body.name, body.comment);
    }
}
