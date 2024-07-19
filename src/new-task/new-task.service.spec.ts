import { Test, TestingModule } from '@nestjs/testing';
import { NewTaskService } from './new-task.service';

describe('NewTaskService', () => {
  let service: NewTaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewTaskService],
    }).compile();

    service = module.get<NewTaskService>(NewTaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
