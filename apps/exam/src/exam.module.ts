import { Module } from '@nestjs/common';

import { RedisModule } from '@app/redis';

import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';

@Module({
  imports: [RedisModule],
  controllers: [ExamController],
  providers: [ExamService],
})
export class ExamModule {}
