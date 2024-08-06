import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserDao } from './user.dao';

@Module({
  providers: [UserService, UserDao],
  controllers: [UserController],
})
export class UserModule {}
