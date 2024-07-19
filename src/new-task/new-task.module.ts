import { Module } from '@nestjs/common';
import { NewTaskService } from './new-task.service';
import { NewTaskController } from './new-task.controller';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  controllers: [NewTaskController],
  providers: [NewTaskService],
  imports: [TasksModule]
})
export class NewTaskModule {}
