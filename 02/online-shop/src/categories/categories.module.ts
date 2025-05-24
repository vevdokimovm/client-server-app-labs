import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { DatasourceModule } from '../datasource/datasource.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [DatasourceModule],
})
export class CategoriesModule {}
