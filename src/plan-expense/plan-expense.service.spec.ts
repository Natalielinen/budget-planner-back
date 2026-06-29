import { Test, TestingModule } from '@nestjs/testing';
import { PlanExpenseService } from './plan-expense.service';

describe('PlanExpenseService', () => {
  let service: PlanExpenseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanExpenseService],
    }).compile();

    service = module.get<PlanExpenseService>(PlanExpenseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
