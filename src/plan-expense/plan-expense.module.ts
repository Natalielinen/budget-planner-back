import { Module } from '@nestjs/common';
import { PlanExpenseService } from './plan-expense.service';
import { PlanExpenseController } from './plan-expense.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanExpenseEntity } from './entities/plan-expense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlanExpenseEntity])],
  controllers: [PlanExpenseController],
  providers: [PlanExpenseService],
})
export class PlanExpenseModule {}
