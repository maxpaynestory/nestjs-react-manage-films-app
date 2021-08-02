import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { RegisterRequest } from './dto/register.request';

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
}
