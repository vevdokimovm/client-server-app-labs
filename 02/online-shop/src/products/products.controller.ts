import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly ps: ProductsService) {}

  @Get()
  findAll() {
    return this.ps.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ps.findOne(+id);
  }

  @Post()
  create(@Body() product: Product) {
    return this.ps.create(product);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() p: Product) {
    return this.ps.update(+id, p);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ps.remove(+id);
  }
}
