import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  getMe(@Req() req) {
    return req.user;
  }

  @Post('create')
  create(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }

  // @Put(':id')
  // update(id: string): string {
  //   return 'update' + id;
  // }

  // @Delete('delete:id')
  // delete(@Body() body: any, id: string): string {
  //   return 'delete' + id;
  // }
}
