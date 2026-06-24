import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanDto } from './dto/plan.dto';

@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get('all')
  async getAll() {
    return await this.planService.getAll();
  }

  @Post()
  async create(@Body() body: PlanDto) {
    return await this.planService.create(body);
  }
}
