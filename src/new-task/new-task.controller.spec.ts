import { Test, TestingModule } from '@nestjs/testing';
import { NewTaskController } from './new-task.controller';
import { NewTaskService } from './new-task.service';

describe('NewTaskController', () => {
  let controller: NewTaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewTaskController],
      providers: [NewTaskService],
    }).compile();

    controller = module.get<NewTaskController>(NewTaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
