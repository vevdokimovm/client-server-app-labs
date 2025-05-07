import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly cs: CategoriesService) {}

  @Get()
  findAll() {
    return this.cs.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cs.findOne(+id);
  }

  @Post()
  create(@Body() category: Category) {
    return this.cs.create(category);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() c: Category) {
    return this.cs.update(+id, c);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cs.remove(+id);
  }
}
