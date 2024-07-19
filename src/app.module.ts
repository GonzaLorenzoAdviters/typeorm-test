import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NewTaskModule } from './new-task/new-task.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [EventEmitterModule.forRoot(),TasksModule, ScheduleModule.forRoot(), NewTaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
