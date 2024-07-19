import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UserGuard } from 'src/userGuard';
import { AdminGuard } from 'src/adminGuard';
import { LoggingInterceptor } from 'src/logging.interceptor';

@Controller('tasks')

@UseInterceptors(LoggingInterceptor)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(AdminGuard)
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @UseGuards(UserGuard)
  @Get()
  findAll(@Query('sort') sort: string) {
    return this.tasksService.findAll(sort);
  }

  @Get('/date')
  date()
  {
    return this.tasksService.date();
  }

  @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }  
}
