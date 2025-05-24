import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatasourceModule } from '../datasource/datasource.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [DatasourceModule],
})
export class UsersModule {}
