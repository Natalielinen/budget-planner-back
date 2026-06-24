import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { IncomeService } from './income.service';
import { IncomeDto } from './dto/income.dto';
import { GetAllQueryDto } from './dto/get-all-query.dto';

@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Get('all')
  async getAll(@Query() query: GetAllQueryDto) {
    const { dateFrom, dateTo } = query;
    return await this.incomeService.getAll(dateFrom, dateTo);
  }

  // @Get(':id')
  // // здесь обязательно тип string, так как @Param всегда возвращает строку
  // getById(@Param('id') id: string) {
  //   return this.incomeService.getById(Number(id));
  // }

  @Post()
  create(@Body() body: IncomeDto) {
    return this.incomeService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: IncomeDto) {
    return this.incomeService.update(Number(id), body);
  }

  @Patch(':id')
  patchIncome(@Param('id') id: string, @Body() body: Partial<IncomeDto>) {
    return this.incomeService.patchIncome(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.incomeService.delete(Number(id));
  }
}
