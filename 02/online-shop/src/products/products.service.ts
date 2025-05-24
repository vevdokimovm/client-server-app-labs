import { Injectable } from '@nestjs/common';
import { DatasourceService } from '../datasource/datasource.service';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(private ds: DatasourceService) {}

  findAll() {
    return this.ds.getProducts();
  }

  findOne(id: number) {
    return this.ds.getProducts().find(p => p.id === id);
  }

  create(product: Product) {
    this.ds.getProducts().push(product);
    return product;
  }

  update(id: number, updated: Product) {
    const index = this.ds.getProducts().findIndex(p => p.id === id);
    this.ds.getProducts()[index] = updated;
    return updated;
  }

  remove(id: number) {
    const index = this.ds.getProducts().findIndex(p => p.id === id);
    this.ds.getProducts().splice(index, 1);
    return { success: true };
  }
}
