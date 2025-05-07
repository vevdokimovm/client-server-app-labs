import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly ds: DatasourceService) {}

  findAll(): Category[] {
    return this.ds.getCategories();
  }

  findOne(id: number): Category {
    return this.ds.getCategories().find(c => c.id === id);
  }

  create(category: Category): Category {
    this.ds.getCategories().push(category);
    return category;
  }

  update(id: number, updated: Category): Category {
    const index = this.ds.getCategories().findIndex(c => c.id === id);
    this.ds.getCategories()[index] = updated;
    return updated;
  }

  remove(id: number): number {
    const index = this.ds.getCategories().findIndex(c => c.id === id);
    this.ds.getCategories().splice(index, 1);
    return 200;
  }
}
