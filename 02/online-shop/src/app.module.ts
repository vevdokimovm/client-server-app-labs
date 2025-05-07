import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [ProductsModule, CategoriesModule, UsersModule, DatasourceModule],
})
export class AppModule {}
