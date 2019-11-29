import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
// nest g module tasks --no-spec
@Module({
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
