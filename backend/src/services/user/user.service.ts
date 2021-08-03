import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('users') private userModel: Model<Document>,
    private jwtService: JwtService,
  ) {}
  async register(username: string, password: string, fullname: string) {
    const hash = await bcrypt.hash(
      password,
      Number.parseInt(process.env.SALT_ROUNDS),
    );
    const user = new this.userModel({
      username: username,
      fullname: fullname,
      password: hash,
    });
    return await user.save();
  }
  async login(username: String, password: string) {
    let user = await this.userModel.findOne({
      username: username,
    });

    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }
    const isMatch = await bcrypt.compare(password, user["password"]);
    if(!isMatch){
      throw new Error("PASSOWRD_MISMATCH");
    }
    const payload = { id: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
