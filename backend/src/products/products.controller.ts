import { Controller, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('hello')
  getProducts(): string {
    return this.productService.getProducts();
  }
}