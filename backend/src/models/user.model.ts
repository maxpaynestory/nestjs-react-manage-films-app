import { Schema, model } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

export const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  fullname: String,
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = MongooseModule.forFeature([
  { name: 'users', schema: UserSchema },
]);
