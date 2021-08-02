import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FilmService } from './services/film/film.service';
import { FilmModel } from './models/film.model';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?authSource=admin`,
    ),
    FilmModel,
  ],
  providers: [FilmService],
})
class SeederModule {}

async function bootstrap() {
  NestFactory.create(SeederModule)
    .then((appContext) => {
      const filmService = appContext.get(FilmService);
      let films = [];
      films.push({
        name: 'Film 1',
        description: 'Film 1 description',
        releaseDate: Date.now(),
        rating: 1,
        ticketPrice: 15.3,
        country: 'US',
        genres: ['Action', 'Comedy'],
        comments: [
          {
            name: 'Commentor 1',
            comment:
              'This is an average movie full of action and comedy, i like it',
          },
        ],
      });
      films.push({
        name: 'Film 2',
        description: 'Film 2 description',
        releaseDate: Date.now(),
        rating: 1,
        ticketPrice: 9.99,
        country: 'US',
        genres: ['Drama', 'Horror'],
        comments: [
          {
            name: 'Commentor 2',
            comment:
              'It is a good movie for adults and cinematography is awesome',
          },
        ],
      });
      films.push({
        name: 'Film 3',
        description: 'Film 3 description',
        releaseDate: Date.now(),
        rating: 1,
        ticketPrice: 9.99,
        country: 'US',
        genres: ['Suspence', 'Romance'],
        comments: [
          {
            name: 'Commentor 3',
            comment:
              'Great movie for valentine',
          },
        ],
      });
      filmService.seed(films);
      console.log('Database seeding completed, Ctrl+c to terminate this job');
    })
    .catch((err) => {
      throw err;
    });
}
bootstrap();
