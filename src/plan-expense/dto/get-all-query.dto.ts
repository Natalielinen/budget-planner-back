import { IsString } from 'class-validator';
export class GetAllQueryDto {
  @IsString()
  dateFrom: string;
  @IsString()
  dateTo: string;
}
