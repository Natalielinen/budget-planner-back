import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanExpenseEntity } from './entities/plan-expense.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlanExpenseService {
  constructor(
    @InjectRepository(PlanExpenseEntity)
    private planExpenseRepository: Repository<PlanExpenseEntity>,
  ) {}

  async getAll() {
    return await this.planExpenseRepository.find();
  }

  async create(planExpense: PlanExpenseEntity) {
    return await this.planExpenseRepository.save(planExpense);
  }
}
