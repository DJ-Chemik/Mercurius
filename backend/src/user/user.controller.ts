import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

        @Get(':id')
        getUserById(@Query('id') id)
        {
            return this.userService.user(id);
        }

        @Get('/mail:mail')
        getUserByMail(@Query('mail') mail)
        {
            return this.userService.user(mail);
        }
}