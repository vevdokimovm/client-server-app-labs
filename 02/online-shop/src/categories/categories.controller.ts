import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private cs: CategoriesService) {}

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
  update(@Param('id') id: string, @Body() category: Category) {
    return this.cs.update(+id, category);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cs.remove(+id);
  }
}
