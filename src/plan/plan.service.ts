import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanEntity } from './entities/plan.entity';
import { Repository } from 'typeorm';
import { PlanDto } from './dto/plan.dto';

@Injectable()
export class PlanService {
  constructor(
    @InjectRepository(PlanEntity)
    private planRepository: Repository<PlanEntity>,
  ) {}
  private plans = [
    {
      id: 1,
      dateFrom: new Date('2026-04-25'),
      dateTo: new Date('2026-05-24'),
    },
    {
      id: 2,
      dateFrom: new Date('2026-05-25'),
      dateTo: new Date('2026-06-24'),
    },
  ];

  async getAll() {
    return await this.planRepository.find({
      relations: {
        planExpenses: true,
      },
      order: {
        dateFrom: 'ASC',
      },
    });
  }

  async create(body: PlanDto) {
    const plan = this.planRepository.create({
      dateFrom: body.dateFrom,
      dateTo: body.dateTo,
    });
    return await this.planRepository.save(plan);
  }
}
