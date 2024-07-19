import { PartialType } from '@nestjs/mapped-types';
import { CreateNewTaskDto } from './create-new-task.dto';

export class UpdateNewTaskDto extends PartialType(CreateNewTaskDto) {}
