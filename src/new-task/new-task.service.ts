import { Injectable } from '@nestjs/common';
import { CreateNewTaskDto } from './dto/create-new-task.dto';
import { UpdateNewTaskDto } from './dto/update-new-task.dto';
import { TasksModule } from 'src/tasks/tasks.module';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class NewTaskService {
  constructor(private readonly tasks: TasksModule){}
  create(createNewTaskDto: CreateNewTaskDto) {
    return 'This action adds a new newTask';
  }

  findAll() {
    return `This action returns all newTask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newTask`;
  }

  update(id: number, updateNewTaskDto: UpdateNewTaskDto) {
    return `This action updates a #${id} newTask`;
  }

  remove(id: number) {
    return `This action removes a #${id} newTask`;
  }

  @OnEvent("TASK-CREATED-SUCCESSFULLY")
  listenNewTask(id: string)
  {
    console.log(`NUEVA TAREA: ${id}`)
  }
}
