import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private ps: ProductsService) {}

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
  update(@Param('id') id: string, @Body() product: Product) {
    return this.ps.update(+id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ps.remove(+id);
  }
}
