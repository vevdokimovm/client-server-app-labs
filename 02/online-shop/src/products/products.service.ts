import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class ProductsService {
  constructor(private readonly ds: DatasourceService) {}

  findAll(): Product[] {
    return this.ds.getProducts();
  }

  findOne(id: number): Product {
    return this.ds.getProducts().find(p => p.id === id);
  }

  create(product: Product): Product {
    this.ds.getProducts().push(product);
    return product;
  }

  update(id: number, updated: Product): Product {
    const index = this.ds.getProducts().findIndex(p => p.id === id);
    this.ds.getProducts()[index] = updated;
    return updated;
  }

  remove(id: number): number {
    const index = this.ds.getProducts().findIndex(p => p.id === id);
    this.ds.getProducts().splice(index, 1);
    return 200;
  }
}
