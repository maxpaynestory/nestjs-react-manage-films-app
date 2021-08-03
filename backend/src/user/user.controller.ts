import { Controller, Post, Body, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { LoginRequest } from './dto/login.request';
import { RegisterRequest } from './dto/register.request';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  async register(@Body() registerRequest: RegisterRequest) {
    return this.userService.register(
      registerRequest.username,
      registerRequest.password,
      registerRequest.fullname,
    );
  }

  @Post('login')
  async login(@Body() loginRequest: LoginRequest) {
    try {
      const token = await this.userService.login(
        loginRequest.username,
        loginRequest.password,
      );
      return token;
    } catch (err) {
      throw new NotFoundException("Login failed");
    }
  }
}
