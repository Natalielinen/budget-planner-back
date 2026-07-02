import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseEntity } from './entities/expense.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(ExpenseEntity)
    private expenseRepository: Repository<ExpenseEntity>,
  ) {}

  async getAll(
    dateFrom: string,
    dateTo: string,
  ): Promise<{ expenses: ExpenseEntity[]; total: number }> {
    const expenses = await this.expenseRepository.find({
      where: {
        date: Between(dateFrom, dateTo),
      },
    });

    const total = expenses.reduce((acc, item) => acc + Number(item.amount), 0);
    return {
      expenses,
      total,
    };
  }
}
