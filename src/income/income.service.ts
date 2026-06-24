import { Injectable, NotFoundException } from '@nestjs/common';
import { IncomeDto } from './dto/income.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IncomeEntity } from './entities/income.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(IncomeEntity)
    private incomeRepository: Repository<IncomeEntity>,
  ) {}

  async getAll(
    dateFrom: string,
    dateTo: string,
  ): Promise<{ incomes: IncomeEntity[]; total: number }> {
    const incomes = await this.incomeRepository.find({
      where: {
        date: Between(dateFrom, dateTo),
      },
    });

    const total = incomes.reduce((acc, item) => acc + Number(item.amount), 0);
    return {
      incomes,
      total,
    };
  }

  async create(body: IncomeDto): Promise<IncomeEntity> {
    const income = this.incomeRepository.create(body);

    return await this.incomeRepository.save(income);
  }

  async update(id: number, body: IncomeDto): Promise<IncomeEntity> {
    const income = await this.incomeRepository.findOne({ where: { id } });
    if (!income) throw new NotFoundException('Income not found');
    Object.assign(income, body);
    return await this.incomeRepository.save(income);
  }

  async patchIncome(
    id: number,
    body: Partial<IncomeDto>,
  ): Promise<IncomeEntity> {
    const income = await this.incomeRepository.findOne({ where: { id } });
    if (!income) throw new NotFoundException('Income not found');
    Object.assign(income, body);
    return this.incomeRepository.save(income);
  }

  async delete(id: number): Promise<boolean> {
    const income = await this.incomeRepository.findOne({ where: { id } });
    if (!income) throw new NotFoundException('Income not found');
    await this.incomeRepository.remove(income);
    return true;
  }
}
