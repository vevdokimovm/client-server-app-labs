import { Injectable } from '@nestjs/common';
import { Product } from '../products/product.entity';
import { Category } from '../categories/category.entity';
import { User } from '../users/user.entity';

@Injectable()
export class DatasourceService {
  private products: Product[] = [];
  private categories: Category[] = [];
  private users: User[] = [];

  getProducts() {
    return this.products;
  }

  getCategories() {
    return this.categories;
  }

  getUsers() {
    return this.users;
  }
}
