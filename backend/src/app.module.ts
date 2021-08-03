import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FilmService } from './services/film/film.service';
import { FilmModule } from './film/film.module';
import { FilmModel } from './models/film.model';
import { UserModule } from './user/user.module';
import { UserService } from './services/user/user.service';
import { UserModel } from './models/user.model';
import { JwtModule } from '@nestjs/jwt';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    { ...UserModel, global: true },
    FilmModel,
    ConfigModule.forRoot({ isGlobal: true }),
    {
      ...JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '7d' },
      }),
      global: true,
    },
    MongooseModule.forRoot(
      `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?authSource=admin`,
    ),
    FilmModule,
    UserModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService, FilmService, UserService],
})
export class AppModule {}
