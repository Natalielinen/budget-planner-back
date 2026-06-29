import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanExpenseEntity } from './entities/plan-expense.entity';
import { Between, Repository } from 'typeorm';
import { PlanExpenseDto } from './dto/plan-expense.dto';

@Injectable()
export class PlanExpenseService {
  constructor(
    @InjectRepository(PlanExpenseEntity)
    private planExpenseRepository: Repository<PlanExpenseEntity>,
  ) {}

  async getAll(dateFrom: string, dateTo: string) {
    const expenses = await this.planExpenseRepository.find({
      where: {
        date: Between(dateFrom, dateTo),
      },
    });
    return expenses;
  }

  async create(body: PlanExpenseDto) {
    const planExpense = this.planExpenseRepository.create(body);

    return await this.planExpenseRepository.save(planExpense);
  }
}
