import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
  sayHello(): string {
    return "WITAJ W PRODUKTACH";
  }
}