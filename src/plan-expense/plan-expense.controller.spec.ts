import { Test, TestingModule } from '@nestjs/testing';
import { PlanExpenseController } from './plan-expense.controller';
import { PlanExpenseService } from './plan-expense.service';

describe('PlanExpenseController', () => {
  let controller: PlanExpenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanExpenseController],
      providers: [PlanExpenseService],
    }).compile();

    controller = module.get<PlanExpenseController>(PlanExpenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
