import { IsNotEmpty, IsString } from 'class-validator';

export class PlanDto {
  @IsString()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  dateFrom: string;
  @IsString()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  dateTo: string;

  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  planExpenses: {
    percent: number;
    fixedAmount: number;
    title: string;
  }[];
}
