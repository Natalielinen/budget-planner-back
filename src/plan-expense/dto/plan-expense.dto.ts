import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class PlanExpenseDto {
  @IsNumber()
  @Min(0)
  @Max(100, { message: "Процент не может превышать '100'" })
  percent: number;

  @IsNumber()
  @IsPositive({ message: 'Значение должно быть положительным' })
  fixedAmount: number;

  @IsNumber()
  @IsPositive({ message: 'Значение должно быть положительным' })
  sum: number;

  @IsString()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  date: string;
}
