import { Module } from '@nestjs/common';
import { UserModel } from 'src/models/user.model';
import { UserService } from 'src/services/user/user.service';
import { UserController } from './user.controller';

@Module({
  imports: [UserModel],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
