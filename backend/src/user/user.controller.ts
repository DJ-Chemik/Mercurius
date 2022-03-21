import {UserService} from "./user.service";
import {Controller, Get} from "@nestjs/common";

@Controller()
export class UserController{
    constructor(private readonly userService: UserService){}

    @Get()
    getNewUser(){
        const data = {email: "email", login: "name"}
        this.userService.createUser(data);
        console.log("Dodany")
        return "Createuser"

    }

}
