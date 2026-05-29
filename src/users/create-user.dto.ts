import {
  IsString,
  MinLength,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Поле Имя должно быть строкой' })
  @MinLength(3, { message: 'Имя должно быть больше 2 символов' })
  name: string = '';

  @IsEmail({}, { message: 'Некорректный email' })
  email: string = '';

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string = '';
}
