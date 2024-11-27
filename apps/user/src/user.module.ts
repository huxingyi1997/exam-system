import { Module } from '@nestjs/common';

import { RedisModule } from '@app/redis';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [RedisModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
