import { Module } from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeEntity } from './entities/income.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IncomeEntity])],
  controllers: [IncomeController],
  providers: [IncomeService],
})
export class IncomeModule {}
