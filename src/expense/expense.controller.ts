import { Controller, Get, Query } from '@nestjs/common';
import { ExpenseService } from './expense.service';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get('all')
  async getAll(
    @Query('dateFrom') dateFrom: string,
    @Query('dateTo') dateTo: string,
  ) {
    return this.expenseService.getAll(dateFrom, dateTo);
  }
}
