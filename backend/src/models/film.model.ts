import { Schema, model } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

export const FilmSchema = new Schema({
  Name: String,
  description: String,
  releaseDate: Date,
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
  ticketPrice: Number,
  country: String,
  genres: [String],
  photo: { data: Buffer, contentType: String },
  createdAt: { type: Date, default: Date.now },
});

export const FilmModel = MongooseModule.forFeature([
  { name: 'films', schema: FilmSchema },
]);
