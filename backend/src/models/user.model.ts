import { Schema, model } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

export const UserSchema = new Schema({
  username: String,
  password: String,
  fullname: String,
});

export const UserModel = MongooseModule.forFeature([
  { name: 'users', schema: UserSchema },
]);
