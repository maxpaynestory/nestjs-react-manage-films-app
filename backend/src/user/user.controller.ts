import { Controller, Post, Body } from '@nestjs/common';
import { RegisterRequest } from './dto/register.request';

@Controller('api')
export class UserController {
    @Post('register')
    async register(@Body() registerRequest: RegisterRequest){
        return "Ya";
    }
}
