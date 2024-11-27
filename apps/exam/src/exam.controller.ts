import { Controller, Get, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { RedisService } from '@app/redis/redis.service';
import { ExamService } from './exam.service';

@Controller()
export class ExamController {
  constructor(
    private readonly examService: ExamService,
    @Inject(RedisService)
    private readonly redisService: RedisService,
  ) {}

  @Get()
  async getHello() {
    const keys = await this.redisService.keys('*');
    return this.examService.getHello() + keys;
  }

  @MessagePattern('sum')
  sum(numArr: Array<number>): number {
    return numArr.reduce((total, item) => total + item, 0);
  }
}
