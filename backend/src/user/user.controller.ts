import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Delete(':id')
  remove(@Param('id') id: number): string {
    return `Delete the user #${id}`;
  }
}