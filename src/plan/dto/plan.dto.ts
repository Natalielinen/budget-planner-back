import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PlanDto {
  @IsString()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  dateFrom: string;
  @IsString()
  @IsNotEmpty({ message: 'Поле не может быть пустым' })
  dateTo: string;

  @IsNumber()
  balance: number;
}
