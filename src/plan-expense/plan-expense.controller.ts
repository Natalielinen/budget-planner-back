import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PlanExpenseService } from './plan-expense.service';
import { GetAllQueryDto } from './dto/get-all-query.dto';
import { PlanExpenseDto } from './dto/plan-expense.dto';

@Controller('plan-expense')
export class PlanExpenseController {
  constructor(private readonly planExpenseService: PlanExpenseService) {}

  @Get('all')
  getAll(@Query() query: GetAllQueryDto) {
    const { dateFrom, dateTo } = query;
    return this.planExpenseService.getAll(dateFrom, dateTo);
  }

  @Post()
  create(@Body() body: PlanExpenseDto) {
    return this.planExpenseService.create(body);
  }
}
