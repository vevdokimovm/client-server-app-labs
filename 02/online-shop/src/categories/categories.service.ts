import { Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(private ds: DatasourceService) {}

  findAll() {
    return this.ds.getCategories();
  }

  findOne(id: number) {
    return this.ds.getCategories().find(c => c.id === id);
  }

  create(category: Category) {
    this.ds.getCategories().push(category);
    return category;
  }

  update(id: number, updated: Category) {
    const index = this.ds.getCategories().findIndex(c => c.id === id);
    this.ds.getCategories()[index] = updated;
    return updated;
  }

  remove(id: number) {
    const index = this.ds.getCategories().findIndex(c => c.id === id);
    this.ds.getCategories().splice(index, 1);
    return { success: true };
  }
}
