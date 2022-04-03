import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
        @Get(':id')
        getUserById(@Param('id') id: number)
        {
            const userId = {id: "id"}
            //this.userService.user(userId)
            return `Get user by id: #${id}`;
        }

        @Get('/mail:mail')
        @Redirect('https://docs.nestjs.com')
        getUserByMail(@Param('mail') mail: string)
        {
            const userMail = {email: "email"}
            //this.userService.updateUser(userMail)
            return `Get user by mail: #${mail}`;
        }
}
