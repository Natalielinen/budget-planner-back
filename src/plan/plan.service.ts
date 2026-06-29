import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getAll() {
    return await this.planRepository.find({
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

  async patchPlan(id: number, body: Partial<PlanDto>) {
    const plan = await this.planRepository.findOne({ where: { id } });
    if (!plan) throw new NotFoundException('Income not found');
    Object.assign(plan, body);
    return this.planRepository.save(plan);
  }
}
