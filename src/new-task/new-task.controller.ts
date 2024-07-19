import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewTaskService } from './new-task.service';
import { CreateNewTaskDto } from './dto/create-new-task.dto';
import { UpdateNewTaskDto } from './dto/update-new-task.dto';

@Controller('new-task')
export class NewTaskController {
  constructor(private readonly newTaskService: NewTaskService) {}

  @Post()
  create(@Body() createNewTaskDto: CreateNewTaskDto) {
    return this.newTaskService.create(createNewTaskDto);
  }

  @Get()
  findAll() {
    return this.newTaskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newTaskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewTaskDto: UpdateNewTaskDto) {
    return this.newTaskService.update(+id, updateNewTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newTaskService.remove(+id);
  }
}
