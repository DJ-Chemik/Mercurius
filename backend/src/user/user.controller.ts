import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/getSingleUser')
export class UserController {
  constructor(private readonly userService: UserService) {
  }
    @Get(':id')
    getUserById(@Param('id') id: string)
    {
        const data = {id: "id"}
        return id;
    }

    @Get(':mail')
    getUserByMail(@Param('mail') mail: string)
    {
        const data = {email: "email"}
        return mail;
    }
}
