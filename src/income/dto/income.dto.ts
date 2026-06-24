import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class IncomeDto {
  @IsNumber()
  @IsPositive({ message: 'Значение должно быть положительным' })
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  amount: number;
  @IsString()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  currency: string;
  @IsString()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  source: string;
  @IsString()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  date: string;
}
