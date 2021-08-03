import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FilmService {
  constructor(@InjectModel('films') private filmModel: Model<Document>) {}
  async seed(seedData) {
    return await this.filmModel.insertMany(seedData);
  }
  async findAll(limit, skip) {
    const total = await this.filmModel.countDocuments({});
    const docs = await this.filmModel.find({}).skip(skip).limit(limit);
    return {
      total: total,
      todos: docs,
    };
  }
  async findOneBySlug(slug) {
    return await this.filmModel.findOne({ slug: slug });
  }
  async addCommentToFilm(filmId: String, name: String, comment: String) {
    return await this.filmModel.findOneAndUpdate(
      { _id: filmId },
      { $push: { comments: { name: name, comment: comment } } },
    );
  }
}
