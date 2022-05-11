import { Body, Post, Controller, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from "@prisma/client";
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Post()
  async createNewUser(@Body() newUserData: Prisma.UserCreateInput) {
    await this.userService.createUser(newUserData)
    return `Pomyślnie dodano użytkownika o adresie email: ${newUserData.email} oraz nazwie: ${newUserData.login}`
  }
}
