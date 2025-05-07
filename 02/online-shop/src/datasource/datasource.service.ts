import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/product.entity';
import { Category } from 'src/categories/category.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class DatasourceService {
  private products: Product[] = [];
  private categories: Category[] = [];
  private users: User[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getUsers(): User[] {
    return this.users;
  }
}
