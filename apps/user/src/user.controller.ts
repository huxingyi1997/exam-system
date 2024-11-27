import { Controller, Get, Inject } from '@nestjs/common';
import { RedisService } from '@app/redis';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject(RedisService)
    private readonly redisService: RedisService,
  ) {}

  @Get()
  async getHello() {
    const keys = await this.redisService.keys('*');
    return this.userService.getHello() + keys;
  }
}
