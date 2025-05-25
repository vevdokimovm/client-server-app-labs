import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AffiliationsController } from './affiliations.controller';
import { AffiliationsService } from './affiliations.service';
import { Affiliation } from './entities/affiliation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Affiliation])],
  controllers: [AffiliationsController],
  providers: [AffiliationsService],
})
export class AffiliationsModule {}
