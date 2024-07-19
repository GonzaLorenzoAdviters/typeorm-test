import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import * as fs from 'fs/promises'
import { DATA_PATH } from 'src/common/global.constants';
import { randomUUID } from 'crypto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Cron, CronExpression } from '@nestjs/schedule';
import { find } from 'rxjs';

@Injectable()

export class TasksService {
  constructor(private readonly eventEmitter: EventEmitter2) { }
  async create(taskDto: CreateTaskDto) {
    const taskList = await this.findAll();

    const randomID = randomUUID()
    const newTask = { id: randomID, ...taskDto }

    taskList.push(newTask);
    this.eventEmitter.emit("TASK-CREATED-SUCCESSFULLY", randomID);

    fs.writeFile(DATA_PATH, JSON.stringify(taskList))

    return taskList;
  }

  async findAll(sort?: string) {
    /*const newdate = new Date().toISOString();
      console.log(newdate); */

    const data = await fs.readFile(DATA_PATH)
    const taskList: CreateTaskDto[] = JSON.parse(data.toString())

    if (sort == 'priority') {
      return taskList.sort((a, b) => a.priority - b.priority);
    }
    else if (sort = 'scheduledTime')
      return taskList.sort((a, b) => new Date(a.scheduledTime).getTime() - new Date(b.scheduledTime).getTime());

    return taskList;
  }

  async findOne(id: string) {
    const taskList = await this.findAll();

    const taskIndex = taskList.findIndex((task) => task.id == id);

    if (taskIndex == -1) throw new NotFoundException()

    return taskList[taskIndex];
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const taskList = await this.findAll();

    const taskIndex = taskList.findIndex((task) => task.id == id);

    if (taskIndex == -1) throw new BadRequestException()

    taskList[taskIndex] = { ...taskList[taskIndex], ...updateTaskDto }

    fs.writeFile(DATA_PATH, JSON.stringify(taskList))

    return updateTaskDto;
  }

  async remove(id: string) {
    const taskList = await this.findAll();

    const taskIndex = taskList.findIndex((task) => task.id == id);

    if (taskIndex == -1) throw new BadRequestException()

    taskList.splice(taskIndex, 1);

    fs.writeFile(DATA_PATH, JSON.stringify(taskList))

    return taskList;
  }

  date() {
    //console.log("hola");
    const date = new Date();
    const fecha = date.getHours().toString() + ":" + date.getMinutes().toString();
    return fecha;
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async checkTasks() {
    const taskList = await this.findAll()

    taskList.map((task) => {
      const currentDate = new Date()
      currentDate.setHours((currentDate.getUTCHours() + 12))

      const limit = currentDate.getTime();
      const horaTarea = new Date(task.scheduledTime).getTime()
      const horaActual = new Date().getTime();

      if (horaTarea > horaActual && horaTarea < limit)
      {
        let diffTime = (limit - horaTarea) /1000
        diffTime /= (60*60)
        diffTime = Math.abs(Math.round(diffTime))

        console.log(`la tarea ${task.id} vence en ${diffTime} horas`)
      }
    })
  }
}
