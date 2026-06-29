import { Controller } from '@nestjs/common';
import { PlanExpenseService } from './plan-expense.service';

@Controller('plan-expense')
export class PlanExpenseController {
  constructor(private readonly planExpenseService: PlanExpenseService) {}
}
