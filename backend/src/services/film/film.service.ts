import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FilmService {
    constructor(@InjectModel('films') private filmModel: Model<Document>){}
    async seed(seedData){
        return await this.filmModel.insertMany(seedData);
    }
    async findAll(limit, skip){
        return await this.filmModel.find();
    }
    async findOneBySlug(slug){

    }
}
