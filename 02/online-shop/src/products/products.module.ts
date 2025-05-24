import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { DatasourceModule } from '../datasource/datasource.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [DatasourceModule],
})
export class ProductsModule {}
