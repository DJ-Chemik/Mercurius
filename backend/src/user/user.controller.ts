import {UserService} from "./user.service";
import {Controller, Post} from "@nestjs/common";

@Controller('createuser')
export class UserController {
    constructor(private readonly userService: UserService) {
    }
    @Post()
    createNewUser(email: string, name: string) {
        const data = {email: email, login: name}
        this.userService.createUser(data)
    }
}
