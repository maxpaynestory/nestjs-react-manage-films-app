import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private userModel: Model<Document>) {}
  async register(username: string, password: string, fullname: string) {
    const hash = await bcrypt.hash(password, Number.parseInt(process.env.SALT_ROUNDS));
    const user = new this.userModel({
        username: username,
        fullname: fullname,
        password: hash
    });
    return await user.save();
  }
}
