import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

        @Get()
        async getUser(@Query('id') id) 
        {
            return this.userService.user(id);
        }

        @Get('/mail')
        getUserByMail(@Query('mail') mail)
        {
            return this.userService.user(mail);
        }
}